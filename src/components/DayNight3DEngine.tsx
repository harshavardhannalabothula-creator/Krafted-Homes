'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface DayNight3DEngineProps {
  isNightMode: boolean;
}

export default function DayNight3DEngine({ isNightMode }: DayNight3DEngineProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const roomLightsRef = useRef<THREE.PointLight[]>([]);
  const streetLightsRef = useRef<THREE.PointLight[]>([]);
  const poolLightRef = useRef<THREE.PointLight | null>(null);
  const windowGlowMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const bgTargetColorRef = useRef<THREE.Color>(new THREE.Color(0x87ceeb));

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const initialBgColor = isNightMode ? new THREE.Color(0x050b1a) : new THREE.Color(0x87ceeb);
    scene.background = initialBgColor;
    scene.fog = new THREE.FogExp2(initialBgColor.getHex(), 0.02);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(18, 12, 22);
    camera.lookAt(0, 2, 0);

    // 2. RENDERER WITH TRY-CATCH & CLEANUP
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setClearColor(initialBgColor.getHex(), 1);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
    } catch (e) {
      console.error("WebGL error in DayNight3DEngine:", e);
      return;
    }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 3. DAY / NIGHT LIGHTING SYSTEM
    const ambientLight = new THREE.AmbientLight(0xffffff, isNightMode ? 0.2 : 0.9);
    ambientLightRef.current = ambientLight;
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5e6, isNightMode ? 0.1 : 1.8);
    sunLight.position.set(20, 30, 15);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLightRef.current = sunLight;
    scene.add(sunLight);

    // 4. INTERIOR WARM VILLA ROOM LIGHT SOURCES (BEAMING OUTWARD AT NIGHT)
    const roomLights: THREE.PointLight[] = [];

    // Ground Floor Living Room Light
    const livingLight = new THREE.PointLight(0xf59e0b, isNightMode ? 4.5 : 0, 18);
    livingLight.position.set(-1, 2.2, 0);
    livingLight.castShadow = true;
    scene.add(livingLight);
    roomLights.push(livingLight);

    // Master Bedroom Suite Light
    const bedLight = new THREE.PointLight(0xfebd59, isNightMode ? 4.0 : 0, 16);
    bedLight.position.set(3.5, 4.5, -1);
    bedLight.castShadow = true;
    scene.add(bedLight);
    roomLights.push(bedLight);

    // Terrace Lounge Light
    const terraceLight = new THREE.PointLight(0xffe082, isNightMode ? 3.5 : 0, 14);
    terraceLight.position.set(0, 6.8, 1);
    scene.add(terraceLight);
    roomLights.push(terraceLight);

    roomLightsRef.current = roomLights;

    // Outdoor Pool Underwater Blue Glow Light
    const poolLight = new THREE.PointLight(0x0284c7, isNightMode ? 3.0 : 0.5, 15);
    poolLight.position.set(2, 0.2, 7);
    poolLightRef.current = poolLight;
    scene.add(poolLight);

    // 5. 3D LUXURY SPLIT-LEVEL HILLSIDE VILLA GEOMETRY
    const villaGroup = new THREE.Group();
    scene.add(villaGroup);

    // Terraced Hill Slope Ground Base
    const hillBaseGeo = new THREE.BoxGeometry(40, 1.2, 40);
    const hillBaseMat = new THREE.MeshStandardMaterial({ color: 0x162235, roughness: 0.8 });
    const hillBaseMesh = new THREE.Mesh(hillBaseGeo, hillBaseMat);
    hillBaseMesh.position.set(0, -0.6, 0);
    hillBaseMesh.receiveShadow = true;
    villaGroup.add(hillBaseMesh);

    // Granite Retaining Wall on Hillside Slope
    const wallGeo = new THREE.BoxGeometry(28, 2.4, 0.6);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 });
    const wallMesh = new THREE.Mesh(wallGeo, wallMat);
    wallMesh.position.set(0, 0.6, 8.5);
    wallMesh.receiveShadow = true;
    villaGroup.add(wallMesh);

    // Teak Wood Patio Deck Overlooking Hill Slope
    const deckGeo = new THREE.BoxGeometry(18, 0.15, 14);
    const deckMat = new THREE.MeshStandardMaterial({ color: 0x4a3728, roughness: 0.6 });
    const deckMesh = new THREE.Mesh(deckGeo, deckMat);
    deckMesh.position.set(0, 1.25, 1);
    deckMesh.receiveShadow = true;
    villaGroup.add(deckMesh);

    // Overhanging Hillside Swimming Pool
    const poolGeo = new THREE.BoxGeometry(9, 0.1, 5);
    const poolMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.8 });
    const poolMesh = new THREE.Mesh(poolGeo, poolMat);
    poolMesh.position.set(2.5, 1.28, 7.5);
    villaGroup.add(poolMesh);

    // Villa Concrete Base Slabs (Level 01 & Level 02 Split-Level Architecture)
    const baseMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
    const woodAccentMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.5 });

    // Level 01 Ground Living Structure (Seated on Hill Terrace)
    const lev1Mesh = new THREE.Mesh(new THREE.BoxGeometry(10, 3.2, 8), baseMat);
    lev1Mesh.position.set(-1, 2.8, 0);
    lev1Mesh.castShadow = true;
    lev1Mesh.receiveShadow = true;
    villaGroup.add(lev1Mesh);

    // Level 02 Cantilever Bedroom Wing (Projecting over Hill Slope)
    const lev2Mesh = new THREE.Mesh(new THREE.BoxGeometry(9, 3.0, 7), woodAccentMat);
    lev2Mesh.position.set(2.5, 5.8, -1);
    lev2Mesh.castShadow = true;
    lev2Mesh.receiveShadow = true;
    villaGroup.add(lev2Mesh);

    // Level 03 Terrace Roof Canopy
    const roofMesh = new THREE.Mesh(new THREE.BoxGeometry(12, 0.3, 9), new THREE.MeshStandardMaterial({ color: 0xc5a059, metalness: 0.4 }));
    roofMesh.position.set(0.5, 7.45, -0.5);
    roofMesh.castShadow = true;
    villaGroup.add(roofMesh);

    // Floor-to-Ceiling Glass Window Facades
    const windowGeo1 = new THREE.PlaneGeometry(8, 2.6);
    const windowGlowMat = new THREE.MeshBasicMaterial({
      color: isNightMode ? 0xfef08a : 0xe2e8f0,
      transparent: true,
      opacity: isNightMode ? 0.9 : 0.4,
    });
    windowGlowMatRef.current = windowGlowMat;

    const winMesh1 = new THREE.Mesh(windowGeo1, windowGlowMat);
    winMesh1.position.set(-1, 2.8, 4.02);
    villaGroup.add(winMesh1);

    const winMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(7, 2.4), windowGlowMat);
    winMesh2.position.set(2.5, 5.8, 2.52);
    villaGroup.add(winMesh2);

    // 3D Hillside Pine Trees & Pathway Lanterns
    const trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 1.4, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f });
    const foliageGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 });

    const treeCoords = [
      [-8, 1.2, 6],
      [9, 1.2, 3],
      [-9, 1.2, -4],
      [10, 1.2, -5],
    ];

    treeCoords.forEach(([tx, ty, tz]) => {
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 0.7;
      trunk.castShadow = true;
      tree.add(trunk);

      const foliage = new THREE.Mesh(foliageGeo, foliageMat);
      foliage.position.y = 2.0;
      foliage.castShadow = true;
      tree.add(foliage);

      tree.position.set(tx, ty, tz);
      villaGroup.add(tree);
    });

    // 6. ADD 3 ARCHITECTURAL 3D STREET LIGHT POLES & WARM PATHWAY LANTERNS ALONG HILL AVENUE
    const poleGeo = new THREE.CylinderGeometry(0.06, 0.08, 2.8, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.2 });
    const lanternHeadGeo = new THREE.BoxGeometry(0.4, 0.3, 0.4);
    const lanternHeadMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });

    const streetLightCoords = [
      [-6, 1.2, 9.5],  // Street light 1: Hill terrace walkway
      [8, 1.2, 9.5],   // Street light 2: Pool deck terrace avenue
      [-5, 1.2, -5],   // Street light 3: Upper hill slope avenue
    ];

    const streetLights: THREE.PointLight[] = [];

    streetLightCoords.forEach(([sx, sy, sz]) => {
      const poleGroup = new THREE.Group();
      poleGroup.position.set(sx, sy, sz);

      const poleMesh = new THREE.Mesh(poleGeo, poleMat);
      poleMesh.position.y = 1.4;
      poleMesh.castShadow = true;
      poleGroup.add(poleMesh);

      const headMesh = new THREE.Mesh(lanternHeadGeo, lanternHeadMat);
      headMesh.position.y = 2.8;
      poleGroup.add(headMesh);

      const sLight = new THREE.PointLight(0xf59e0b, isNightMode ? 4.0 : 0, 12);
      sLight.position.set(sx, sy + 2.7, sz);
      sLight.castShadow = true;
      scene.add(sLight);
      streetLights.push(sLight);

      villaGroup.add(poleGroup);
    });

    streetLightsRef.current = streetLights;

    // 7. ANIMATION LOOP
    let animationFrameId: number;
    let angle = 0.4;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Slow & Soothing 3D Orbit Camera Motion
      angle += 0.0005;
      const radius = 24;
      camera.position.x = Math.sin(angle) * radius;
      camera.position.z = Math.cos(angle) * radius;
      camera.position.y = 12 + Math.sin(angle * 0.5) * 2;
      camera.lookAt(0, 2.5, 0);

      // Smooth Day/Night Background Color Lerp
      const targetHex = isNightMode ? 0x050b1a : 0x87ceeb;
      bgTargetColorRef.current.setHex(targetHex);
      scene.background = (scene.background as THREE.Color).lerp(bgTargetColorRef.current, 0.05);

      renderer.render(scene, camera);
    };

    animate();

    // 8. RESIZE HANDLER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  // Update Lights when isNightMode changes
  useEffect(() => {
    if (sunLightRef.current) {
      sunLightRef.current.intensity = isNightMode ? 0.1 : 1.8;
      sunLightRef.current.color.setHex(isNightMode ? 0x38bdf8 : 0xfff5e6);
    }

    if (ambientLightRef.current) {
      ambientLightRef.current.intensity = isNightMode ? 0.2 : 0.9;
    }

    roomLightsRef.current.forEach((light) => {
      light.intensity = isNightMode ? 4.5 : 0;
    });

    streetLightsRef.current.forEach((light) => {
      light.intensity = isNightMode ? 4.0 : 0;
    });

    if (poolLightRef.current) {
      poolLightRef.current.intensity = isNightMode ? 3.5 : 0.5;
    }

    if (windowGlowMatRef.current) {
      windowGlowMatRef.current.color.setHex(isNightMode ? 0xfef08a : 0xe2e8f0);
      windowGlowMatRef.current.opacity = isNightMode ? 0.95 : 0.4;
    }
  }, [isNightMode]);

  return (
    <div className="relative w-full h-full min-h-[440px] sm:min-h-[500px] bg-[#050b1a] rounded-xl overflow-hidden border border-amber-500/30 shadow-2xl">
      <div ref={mountRef} className="w-full h-full min-h-[440px] sm:min-h-[500px] cursor-grab active:cursor-grabbing" />
    </div>
  );
}
