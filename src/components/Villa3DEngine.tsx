'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Villa3DEngineProps {
  facing: 'East' | 'West';
  mode?: 'DAY' | 'NIGHT';
}

export default function Villa3DEngine({ facing, mode = 'DAY' }: Villa3DEngineProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isUserDragging, setIsUserDragging] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Failsafe container dimensions
    const width = container.clientWidth || 700;
    const height = container.clientHeight || 520;
    const isNight = mode === 'NIGHT';

    // 1. SCENE & CAMERA SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isNight ? 0x0b1320 : 0xf4f0e7);

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
    const cameraRadius = 25;
    
    let cameraAzimuth = facing === 'East' ? Math.PI / 4 : -Math.PI * 0.75;
    let cameraElevation = Math.PI / 6;
    let targetAzimuth = facing === 'East' ? Math.PI / 4 : -Math.PI * 0.75;

    // 2. RENDERER WITH FAILSAFE TRY-CATCH
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setClearColor(isNight ? 0x0b1320 : 0xf4f0e7, 1);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = isNight ? 1.55 : 1.15;
    } catch (e) {
      console.error('WebGL Villa Renderer Error:', e);
      setHasWebGL(false);
      return;
    }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 3. ARCHITECTURAL LIGHTING & ATMOSPHERE
    const hemiLight = new THREE.HemisphereLight(
      isNight ? 0xe2e8f0 : facing === 'East' ? 0xffffff : 0xfff5e6,
      isNight ? 0x1e293b : facing === 'East' ? 0xd5cebe : 0xc8bdac,
      isNight ? 1.1 : 0.95
    );
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(
      isNight ? 0xbae6fd : facing === 'East' ? 0xfff8ea : 0xffda9e,
      isNight ? 1.3 : facing === 'East' ? 1.8 : 1.6
    );
    sunLight.position.set(facing === 'East' ? 28 : -28, 30, facing === 'East' ? 20 : -15);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.0001;
    scene.add(sunLight);

    // BACK SIDE & GARDEN TREES FILL LIGHT
    const backFillLight = new THREE.DirectionalLight(0xffe082, isNight ? 1.6 : 0.0);
    backFillLight.position.set(0, 22, -25);
    scene.add(backFillLight);

    // 4. MULTI-SPOTLIGHT ARCHITECTURAL ILLUMINATION SYSTEM
    const interiorLight1 = new THREE.PointLight(0xffb300, isNight ? 8.5 : 1.2, 35);
    interiorLight1.position.set(-0.5, 2.0, 0.2);
    scene.add(interiorLight1);

    const interiorLight2 = new THREE.PointLight(0xffc107, isNight ? 7.5 : 0.8, 30);
    interiorLight2.position.set(-2.5, 2.0, -2.5);
    scene.add(interiorLight2);

    const interiorLight3 = new THREE.PointLight(0xffca28, isNight ? 8.0 : 0.8, 30);
    interiorLight3.position.set(1.2, 4.8, 0.5);
    scene.add(interiorLight3);

    const interiorLight4 = new THREE.PointLight(0xffe082, isNight ? 7.0 : 0.6, 28);
    interiorLight4.position.set(2.5, 4.8, -2.8);
    scene.add(interiorLight4);

    const terraceLight5 = new THREE.PointLight(0xffb300, isNight ? 7.5 : 0.6, 32);
    terraceLight5.position.set(0.5, 6.8, -1.2);
    scene.add(terraceLight5);

    const patioLight6 = new THREE.PointLight(0xff8f00, isNight ? 7.0 : 0.5, 25);
    patioLight6.position.set(-2.0, 0.8, 1.2);
    scene.add(patioLight6);

    const wallLightFrontLeft = new THREE.PointLight(0xffc107, isNight ? 6.5 : 0.0, 22);
    wallLightFrontLeft.position.set(-4.5, 0.5, 2.0);
    scene.add(wallLightFrontLeft);

    const wallLightFrontRight = new THREE.PointLight(0xffc107, isNight ? 6.5 : 0.0, 22);
    wallLightFrontRight.position.set(4.5, 0.5, 2.0);
    scene.add(wallLightFrontRight);

    const wallLightBackLeft = new THREE.PointLight(0xffb300, isNight ? 6.5 : 0.0, 22);
    wallLightBackLeft.position.set(-4.5, 0.5, -5.0);
    scene.add(wallLightBackLeft);

    const wallLightBackRight = new THREE.PointLight(0xffb300, isNight ? 6.5 : 0.0, 22);
    wallLightBackRight.position.set(4.5, 0.5, -5.0);
    scene.add(wallLightBackRight);

    // 5. ARCHITECTURAL VILLA MODEL GROUP
    const villaGroup = new THREE.Group();
    scene.add(villaGroup);

    // MATERIALS
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xf4f0e7,
      roughness: 0.35,
      metalness: 0.05,
      emissive: isNight ? new THREE.Color(0x3d3222) : new THREE.Color(0x000000),
      emissiveIntensity: isNight ? 0.18 : 0.0,
    });
    const stoneFacadeMat = new THREE.MeshStandardMaterial({
      color: isNight ? 0x3a475a : 0xdcd4c5,
      roughness: 0.6,
      emissive: isNight ? new THREE.Color(0x252018) : new THREE.Color(0x000000),
      emissiveIntensity: isNight ? 0.12 : 0.0,
    });
    const roofTrimMat = new THREE.MeshStandardMaterial({ color: 0x111722, roughness: 0.35 });
    const teakWoodMat = new THREE.MeshStandardMaterial({ color: 0x8c6527, roughness: 0.45 });
    const goldAccentMat = new THREE.MeshStandardMaterial({ color: 0xb18a4a, roughness: 0.2, metalness: 0.4 });
    
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: isNight ? 0xfff0b3 : 0x38bdf8,
      transparent: true,
      opacity: isNight ? 0.80 : 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: isNight ? 0.25 : 0.7,
      ior: 1.5,
      emissive: isNight ? new THREE.Color(0xf59e0b) : new THREE.Color(0x000000),
      emissiveIntensity: isNight ? 0.95 : 0.0,
    });
    const grassMat = new THREE.MeshStandardMaterial({
      color: isNight ? 0x46563d : 0x66705a,
      roughness: 0.8,
      emissive: isNight ? new THREE.Color(0x152010) : new THREE.Color(0x000000),
      emissiveIntensity: isNight ? 0.15 : 0.0,
    });

    // A. SITE BASE & 180 SQ.FT BACKYARD LAWN
    const siteBase = new THREE.Mesh(new THREE.BoxGeometry(16, 0.4, 16), stoneFacadeMat);
    siteBase.position.y = -0.2;
    siteBase.receiveShadow = true;
    villaGroup.add(siteBase);

    // Backyard Lawn
    const lawn = new THREE.Mesh(new THREE.BoxGeometry(14.5, 0.1, 6), grassMat);
    lawn.position.set(0, 0.05, 4.2);
    lawn.receiveShadow = true;
    villaGroup.add(lawn);

    // Teak Wood Patio Deck
    const patioDeck = new THREE.Mesh(new THREE.BoxGeometry(11, 0.15, 3.8), teakWoodMat);
    patioDeck.position.set(0, 0.12, 1);
    patioDeck.receiveShadow = true;
    patioDeck.castShadow = true;
    villaGroup.add(patioDeck);

    // B. GROUND LEVEL: DOUBLE-HEIGHT SPATIAL LIVING ROOM
    const groundLiving = new THREE.Mesh(new THREE.BoxGeometry(9.5, 3.4, 7), wallMat);
    groundLiving.position.set(-0.5, 1.7, -2);
    groundLiving.castShadow = true;
    groundLiving.receiveShadow = true;
    villaGroup.add(groundLiving);

    // Glass Panel Sliding Wall
    const glassSlidingDoor = new THREE.Mesh(new THREE.BoxGeometry(8.8, 3.0, 0.12), glassMat);
    glassSlidingDoor.position.set(-0.5, 1.7, 1.52);
    villaGroup.add(glassSlidingDoor);

    // Gold Metal Glass Framing
    const frameTop = new THREE.Mesh(new THREE.BoxGeometry(9.0, 0.15, 0.16), goldAccentMat);
    frameTop.position.set(-0.5, 3.25, 1.52);
    villaGroup.add(frameTop);

    // C. SPLIT-LEVEL UPPER BEDROOM & SUITE WING
    const upperSuite = new THREE.Mesh(new THREE.BoxGeometry(8, 3.0, 6.5), wallMat);
    upperSuite.position.set(1.2, 4.9, -1.2);
    upperSuite.castShadow = true;
    upperSuite.receiveShadow = true;
    villaGroup.add(upperSuite);

    // Cantilevered Master Balcony
    const balconyFloor = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.25, 2.2), teakWoodMat);
    balconyFloor.position.set(1.2, 3.5, 2.1);
    balconyFloor.castShadow = true;
    villaGroup.add(balconyFloor);

    // Glass Balcony Railing
    const balconyRailing = new THREE.Mesh(new THREE.BoxGeometry(7.5, 1.1, 0.08), glassMat);
    balconyRailing.position.set(1.2, 4.15, 3.15);
    villaGroup.add(balconyRailing);

    // D. ROOFTOP SKY LOUNGE & CANTILEVER ROOF
    const roofCanopy = new THREE.Mesh(new THREE.BoxGeometry(10.5, 0.45, 8), roofTrimMat);
    roofCanopy.position.set(0.5, 6.55, -1.2);
    roofCanopy.castShadow = true;
    villaGroup.add(roofCanopy);

    // Teak Wood Sun Louvers
    for (let i = -3.5; i <= 3.5; i += 1.2) {
      const louver = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.8, 0.6), teakWoodMat);
      louver.position.set(i + 1.2, 4.9, 2.1);
      louver.castShadow = true;
      villaGroup.add(louver);
    }

    // Garden Trees & Shrubs
    for (let i = -5.5; i <= 5.5; i += 2.2) {
      const plant = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 1), grassMat);
      plant.position.set(i, 0.6, 5.8);
      plant.castShadow = true;
      villaGroup.add(plant);
    }

    // 6. 3D STREET LAMP POSTS
    const createStreetLamp = (x: number, z: number) => {
      const lampPoleGroup = new THREE.Group();
      lampPoleGroup.position.set(x, 0, z);

      const poleMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 2.6), roofTrimMat);
      poleMesh.position.y = 1.3;
      poleMesh.castShadow = true;
      lampPoleGroup.add(poleMesh);

      const bulbGeo = new THREE.SphereGeometry(0.24, 16, 16);
      const bulbMat = new THREE.MeshBasicMaterial({
        color: isNight ? 0xffea00 : 0xd5d0c6,
      });
      const bulbMesh = new THREE.Mesh(bulbGeo, bulbMat);
      bulbMesh.position.y = 2.6;
      lampPoleGroup.add(bulbMesh);

      if (isNight) {
        const streetLightPoint = new THREE.PointLight(0xffa000, 8.5, 20);
        streetLightPoint.position.set(0, 2.5, 0);
        streetLightPoint.castShadow = true;
        lampPoleGroup.add(streetLightPoint);
      }

      return lampPoleGroup;
    };

    villaGroup.add(createStreetLamp(-5.8, 4.8));
    villaGroup.add(createStreetLamp(5.8, 4.8));

    // 7. DRAG & ORBIT ROTATION INTERACTION
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

      cameraAzimuth -= deltaX * 0.007;
      cameraElevation = Math.max(0.15, Math.min(Math.PI / 3.2, cameraElevation + deltaY * 0.004));

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

    const domElem = renderer.domElement;
    domElem.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 8. RENDER LOOP
    let animId: number;

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);

      if (isAutoRotating) {
        cameraAzimuth += 0.0035;
      } else if (!isDragging) {
        cameraAzimuth += (targetAzimuth - cameraAzimuth) * 0.05;
      }

      camera.position.x = Math.sin(cameraAzimuth) * Math.cos(cameraElevation) * cameraRadius;
      camera.position.z = Math.cos(cameraAzimuth) * Math.cos(cameraElevation) * cameraRadius;
      camera.position.y = Math.sin(cameraElevation) * cameraRadius;
      camera.lookAt(0, 2.7, 0);

      renderer.render(scene, camera);
    };

    renderLoop();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 700;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      domElem.removeEventListener('pointerdown', onPointerDown);
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
      <div className={`relative w-full h-full min-h-[440px] sm:min-h-[520px] rounded-2xl overflow-hidden border ${mode === 'NIGHT' ? 'bg-[#0b1320] text-white border-white/20' : 'bg-[#F4F0E7] text-[#111722] border-[#D5D0C6]'}`}>
        <img
          src="/images/hero_main_aerial.png"
          alt="Antelia Groves Split-Level Villa Architecture"
          className={`w-full h-full object-cover ${mode === 'NIGHT' ? 'brightness-75 contrast-125' : ''}`}
        />
        <div className="absolute bottom-4 left-4 p-3.5 bg-[#F4F0E7]/95 backdrop-blur-md border border-[#D5D0C6] rounded-lg text-[#111722] text-xs font-bold shadow-md">
          ANTELIA GROVES VILLA — {mode} MODE ({facing.toUpperCase()} FACING)
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full min-h-[440px] sm:min-h-[520px] rounded-2xl overflow-hidden select-none transition-colors duration-700 ${mode === 'NIGHT' ? 'bg-[#0b1320]' : 'bg-[#F4F0E7]'}`}>
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing z-10" />

      {/* DRAG TO ROTATE LABEL */}
      <div className={`absolute top-4 right-4 z-20 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border text-xs font-bold uppercase tracking-wider shadow-sm ${
        mode === 'NIGHT' ? 'bg-[#090e17]/90 border-white/20 text-[#ffc107]' : 'bg-[#F4F0E7]/90 border-[#D5D0C6] text-[#8C6527]'
      }`}>
        <span className={`w-2.5 h-2.5 rounded-full ${isUserDragging ? 'bg-[#ffc107]' : 'bg-[#ffc107] animate-pulse'}`} />
        <span>{isUserDragging ? 'MANUAL ROTATING' : 'DRAG TO ROTATE ↺'}</span>
      </div>

      {/* BOTTOM VILLA SPEC BADGE WITH MODE INDICATOR */}
      <div className={`absolute bottom-4 left-4 z-20 pointer-events-none p-4 backdrop-blur-md border rounded-xl shadow-md ${
        mode === 'NIGHT' ? 'bg-[#090e17]/90 border-white/20 text-white' : 'bg-[#F4F0E7]/90 border-[#D5D0C6] text-[#111722]'
      }`}>
        <span className="text-xs font-bold uppercase tracking-wider text-[#B18A4A] block mb-0.5">
          ANTELIA GROVES — 3D FULL VILLA &amp; BACKSIDE ILLUMINATION
        </span>
        <span className="text-xs font-extrabold uppercase">
          {facing} Facing • {mode === 'NIGHT' ? '🌙 Full 360° Villa & Backside Illuminated' : '☀️ Morning Daylight'}
        </span>
      </div>
    </div>
  );
}
