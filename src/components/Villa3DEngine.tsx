'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Villa3DEngineProps {
  facing?: 'East' | 'West';
  mode?: 'DAY' | 'NIGHT';
}

export default function Villa3DEngine({ facing = 'East', mode = 'DAY' }: Villa3DEngineProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isUserDragging, setIsUserDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    // 1. SCENE & CAMERA SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f6f2);

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    let cameraRadius = 24;
    let cameraAzimuth = facing === 'East' ? Math.PI / 4 : -Math.PI * 0.75;
    let cameraElevation = Math.PI / 6;

    // 2. RENDERER WITH SOFT SHADOWS
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setClearColor(0xf7f6f2, 1);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
    } catch (e) {
      console.error('WebGL Villa Renderer Error:', e);
      setHasWebGL(false);
      return;
    }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 3. ARCHITECTURAL LIGHTING
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xd5cebe, 0.95);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff8ea, 1.8);
    sunLight.position.set(24, 28, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.0001;
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.4);
    scene.add(ambientLight);

    // 4. ARCHITECTURAL VILLA MODEL GROUP
    const villaGroup = new THREE.Group();
    scene.add(villaGroup);

    // MATERIALS
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf4f0e7, roughness: 0.35, metalness: 0.05 });
    const stoneFacadeMat = new THREE.MeshStandardMaterial({ color: 0xdcd4c5, roughness: 0.6 });
    const roofTrimMat = new THREE.MeshStandardMaterial({ color: 0x111722, roughness: 0.35 });
    const teakWoodMat = new THREE.MeshStandardMaterial({ color: 0x8c6527, roughness: 0.45 });
    const goldAccentMat = new THREE.MeshStandardMaterial({ color: 0xb89553, roughness: 0.2, metalness: 0.4 });
    
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.7,
      ior: 1.5,
    });
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x66705a, roughness: 0.8 });

    // SOFT SHADOW GROUND PLANE UNDERNEATH VILLA
    const shadowGeo = new THREE.PlaneGeometry(24, 24);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.01;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // SITE BASE
    const siteBase = new THREE.Mesh(new THREE.BoxGeometry(15, 0.3, 15), stoneFacadeMat);
    siteBase.position.y = -0.15;
    siteBase.receiveShadow = true;
    villaGroup.add(siteBase);

    // Backyard Lawn
    const lawn = new THREE.Mesh(new THREE.BoxGeometry(13.5, 0.08, 5.5), grassMat);
    lawn.position.set(0, 0.04, 4.0);
    lawn.receiveShadow = true;
    villaGroup.add(lawn);

    // Teak Deck
    const patioDeck = new THREE.Mesh(new THREE.BoxGeometry(10.5, 0.12, 3.5), teakWoodMat);
    patioDeck.position.set(0, 0.1, 1);
    patioDeck.receiveShadow = true;
    patioDeck.castShadow = true;
    villaGroup.add(patioDeck);

    // GROUND LEVEL LIVING ROOM
    const groundLiving = new THREE.Mesh(new THREE.BoxGeometry(9, 3.2, 6.5), wallMat);
    groundLiving.position.set(-0.5, 1.6, -1.8);
    groundLiving.castShadow = true;
    groundLiving.receiveShadow = true;
    villaGroup.add(groundLiving);

    // Glass Sliding Wall
    const glassSlidingDoor = new THREE.Mesh(new THREE.BoxGeometry(8.4, 2.8, 0.1), glassMat);
    glassSlidingDoor.position.set(-0.5, 1.6, 1.46);
    villaGroup.add(glassSlidingDoor);

    // Gold Metal Framing
    const frameTop = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.14, 0.14), goldAccentMat);
    frameTop.position.set(-0.5, 3.05, 1.46);
    villaGroup.add(frameTop);

    // UPPER BEDROOM SUITE
    const upperSuite = new THREE.Mesh(new THREE.BoxGeometry(7.5, 2.8, 6), wallMat);
    upperSuite.position.set(1.0, 4.6, -1.0);
    upperSuite.castShadow = true;
    upperSuite.receiveShadow = true;
    villaGroup.add(upperSuite);

    // Master Balcony
    const balconyFloor = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.2, 2.0), teakWoodMat);
    balconyFloor.position.set(1.0, 3.3, 2.0);
    balconyFloor.castShadow = true;
    villaGroup.add(balconyFloor);

    // Glass Balcony Railing
    const balconyRailing = new THREE.Mesh(new THREE.BoxGeometry(7.0, 1.0, 0.06), glassMat);
    balconyRailing.position.set(1.0, 3.9, 3.0);
    villaGroup.add(balconyRailing);

    // ROOFTOP CANOPY
    const roofCanopy = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.4, 7.5), roofTrimMat);
    roofCanopy.position.set(0.4, 6.2, -1.0);
    roofCanopy.castShadow = true;
    villaGroup.add(roofCanopy);

    // Teak Sun Louvers
    for (let i = -3.0; i <= 3.0; i += 1.2) {
      const louver = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.6, 0.5), teakWoodMat);
      louver.position.set(i + 1.0, 4.6, 2.0);
      louver.castShadow = true;
      villaGroup.add(louver);
    }

    // INTERACTION HANDLERS
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let autoRotateTimer: NodeJS.Timeout | null = null;
    let isAutoRotating = true;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      isAutoRotating = false;
      setIsUserDragging(true);
      if (autoRotateTimer) clearTimeout(autoRotateTimer);
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousPointerX;
      const deltaY = e.clientY - previousPointerY;

      cameraAzimuth -= deltaX * 0.006;
      cameraElevation = Math.max(0.12, Math.min(Math.PI / 3.0, cameraElevation + deltaY * 0.004));

      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const onPointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      setIsUserDragging(false);
      autoRotateTimer = setTimeout(() => {
        isAutoRotating = true;
      }, 1500);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraRadius = Math.max(14, Math.min(36, cameraRadius + e.deltaY * 0.02));
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('pointerdown', onPointerDown);
    domElem.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // RENDER LOOP
    let animId: number;
    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);

      if (isAutoRotating) {
        cameraAzimuth += 0.0025; // Slow, elegant rotation
      }

      camera.position.x = Math.sin(cameraAzimuth) * Math.cos(cameraElevation) * cameraRadius;
      camera.position.z = Math.cos(cameraAzimuth) * Math.cos(cameraElevation) * cameraRadius;
      camera.position.y = Math.sin(cameraElevation) * cameraRadius;
      camera.lookAt(0, 2.5, 0);

      renderer.render(scene, camera);
    };

    renderLoop();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 600;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      domElem.removeEventListener('pointerdown', onPointerDown);
      domElem.removeEventListener('wheel', onWheel);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      if (autoRotateTimer) clearTimeout(autoRotateTimer);
      cancelAnimationFrame(animId);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      if (renderer) renderer.dispose();
    };
  }, [facing, mode]);

  if (!hasWebGL) {
    return (
      <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden bg-[#F7F6F2] flex items-center justify-center">
        <img
          src="/images/hero_villa_facade.png"
          alt="Antelia Groves Contemporary Villa Architectural Model"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden select-none bg-[#F7F6F2]"
    >
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing z-10" />

      {/* SUBTLE INTERACTION CUE */}
      <div className={`absolute top-2 right-2 z-20 pointer-events-none transition-opacity duration-300 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F6F2]/90 border border-[#EBE7DF] text-[9px] font-bold uppercase tracking-widest text-[#B89553] shadow-2xs ${isHovered || isUserDragging ? 'opacity-100' : 'opacity-60'}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${isUserDragging ? 'bg-[#1D2421]' : 'bg-[#B89553] animate-pulse'}`} />
        <span>{isUserDragging ? 'ROTATING' : 'DRAG TO ROTATE ↺'}</span>
      </div>
    </div>
  );
}
