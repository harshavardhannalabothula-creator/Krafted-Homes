'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Move, Sparkles } from 'lucide-react';

interface Masterplan3DEngineProps {
  activeSector?: 'ALL' | 'NORTH' | 'CLUBHOUSE' | 'SOUTH';
  layerValue?: number;
}

export default function Masterplan3DEngine({
  activeSector = 'ALL',
  layerValue = 100,
}: Masterplan3DEngineProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const masterGroupRef = useRef<THREE.Group | null>(null);

  const northVillasGroupRef = useRef<THREE.Group | null>(null);
  const southVillasGroupRef = useRef<THREE.Group | null>(null);
  const clubhouseGroupRef = useRef<THREE.Group | null>(null);

  const [isInteracting, setIsInteracting] = useState(false);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationAngleRef = useRef(0.6); // initial viewing angle
  const cameraPitchRef = useRef(0.65); // pitch elevation (isometric tilt)
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 700;
    const height = container.clientHeight || 500;

    // 1. SCENE - Warm Ivory Daylight Aesthetic (NO DARK BACKGROUND)
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xf5f2ea); // Soft Warm Ivory
    scene.fog = new THREE.FogExp2(0xf5f2ea, 0.008);

    // 2. CAMERA
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    cameraRef.current = camera;

    const distance = 42;
    camera.position.x = Math.sin(rotationAngleRef.current) * Math.cos(cameraPitchRef.current) * distance;
    camera.position.y = Math.sin(cameraPitchRef.current) * distance;
    camera.position.z = Math.cos(rotationAngleRef.current) * Math.cos(cameraPitchRef.current) * distance;
    camera.lookAt(0, 0, 0);

    // 3. RENDERER
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      rendererRef.current = renderer;
      renderer.setClearColor(0xf5f2ea, 1);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
    } catch (e) {
      console.error('WebGL Initialization Failed:', e);
      return;
    }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. LIGHTING - Warm Architectural Sunlight
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 0.95);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffaed, 1.8);
    sunLight.position.set(25, 40, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 100;
    sunLight.shadow.camera.left = -25;
    sunLight.shadow.camera.right = 25;
    sunLight.shadow.camera.top = 25;
    sunLight.shadow.camera.bottom = -25;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    const softFillLight = new THREE.DirectionalLight(0xb18a4a, 0.6);
    softFillLight.position.set(-20, 20, -20);
    scene.add(softFillLight);

    // 5. MASTER MODEL GROUP
    const masterGroup = new THREE.Group();
    masterGroupRef.current = masterGroup;
    scene.add(masterGroup);

    // --- TERRAIN BASE (10-Acre Master Site) ---
    const terrainGeo = new THREE.BoxGeometry(34, 0.4, 26);
    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0x5e7352, // Warm Lush Meadow Green
      roughness: 0.8,
      metalness: 0.1,
    });
    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    terrain.position.y = -0.2;
    terrain.receiveShadow = true;
    masterGroup.add(terrain);

    // Outer Perimeter Boundary Trim (Gold/Ivory accent border)
    const borderGeo = new THREE.BoxGeometry(34.8, 0.1, 26.8);
    const borderMat = new THREE.MeshStandardMaterial({ color: 0xd5d0c6, roughness: 0.4 });
    const borderMesh = new THREE.Mesh(borderGeo, borderMat);
    borderMesh.position.y = -0.35;
    masterGroup.add(borderMesh);

    // --- ROAD NETWORK & BOULEVARDS (40ft & 30ft Avenues) ---
    const roadMat = new THREE.MeshStandardMaterial({ color: 0xded8cc, roughness: 0.5 });

    // Main Central Spine Avenue (East-West)
    const mainAvenue = new THREE.Mesh(new THREE.BoxGeometry(34, 0.05, 3.2), roadMat);
    mainAvenue.position.set(0, 0.03, 0);
    mainAvenue.receiveShadow = true;
    masterGroup.add(mainAvenue);

    // North Boulevard (East-West)
    const northAvenue = new THREE.Mesh(new THREE.BoxGeometry(30, 0.05, 2.2), roadMat);
    northAvenue.position.set(0, 0.03, -7.5);
    northAvenue.receiveShadow = true;
    masterGroup.add(northAvenue);

    // South Boulevard (East-West)
    const southAvenue = new THREE.Mesh(new THREE.BoxGeometry(30, 0.05, 2.2), roadMat);
    southAvenue.position.set(0, 0.03, 7.5);
    southAvenue.receiveShadow = true;
    masterGroup.add(southAvenue);

    // Connecting Cross-Avenues (North-South)
    const crossAvenueLeft = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.05, 20), roadMat);
    crossAvenueLeft.position.set(-10, 0.03, 0);
    crossAvenueLeft.receiveShadow = true;
    masterGroup.add(crossAvenueLeft);

    const crossAvenueRight = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.05, 20), roadMat);
    crossAvenueRight.position.set(10, 0.03, 0);
    crossAvenueRight.receiveShadow = true;
    masterGroup.add(crossAvenueRight);

    // Avenue Gold Stripe Markings
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xb18a4a });
    const stripeCenter = new THREE.Mesh(new THREE.BoxGeometry(34, 0.06, 0.12), stripeMat);
    stripeCenter.position.set(0, 0.06, 0);
    masterGroup.add(stripeCenter);

    // --- SHARED VILLA GEOMETRY & MATERIALS ---
    const villaBodyGeo = new THREE.BoxGeometry(1.6, 1.2, 1.8);
    const villaBodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });

    const villaUpperGeo = new THREE.BoxGeometry(1.4, 1.0, 1.5);
    const villaUpperMat = new THREE.MeshStandardMaterial({ color: 0xf4f0e7, roughness: 0.3 });

    const roofSlabGeo = new THREE.BoxGeometry(1.8, 0.12, 2.0);
    const roofSlabMat = new THREE.MeshStandardMaterial({ color: 0xb18a4a, roughness: 0.2, metalness: 0.4 });

    const windowGeo = new THREE.PlaneGeometry(0.5, 0.6);
    const windowMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.9 });

    const lawnGeo = new THREE.BoxGeometry(2.2, 0.04, 2.6);
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x829a73, roughness: 0.8 });

    // Function to create detailed 3D split-level villa
    const createVilla = (x: number, z: number, rotationY = 0) => {
      const vGroup = new THREE.Group();
      vGroup.position.set(x, 0, z);
      vGroup.rotation.y = rotationY;

      // Private Lawn Base
      const lawn = new THREE.Mesh(lawnGeo, lawnMat);
      lawn.position.y = 0.02;
      lawn.receiveShadow = true;
      vGroup.add(lawn);

      // Ground Floor Structure
      const body = new THREE.Mesh(villaBodyGeo, villaBodyMat);
      body.position.set(0, 0.6, 0);
      body.castShadow = true;
      body.receiveShadow = true;
      vGroup.add(body);

      // Upper Floor Cantilever
      const upper = new THREE.Mesh(villaUpperGeo, villaUpperMat);
      upper.position.set(0.1, 1.6, -0.1);
      upper.castShadow = true;
      upper.receiveShadow = true;
      vGroup.add(upper);

      // Gold Terrace Roof Slab
      const roof = new THREE.Mesh(roofSlabGeo, roofSlabMat);
      roof.position.set(0.05, 2.16, 0);
      roof.castShadow = true;
      vGroup.add(roof);

      // Front Glass Windows
      const winFront = new THREE.Mesh(windowGeo, windowMat);
      winFront.position.set(0, 0.75, 0.91);
      vGroup.add(winFront);

      const winUpper = new THREE.Mesh(windowGeo, windowMat);
      winUpper.position.set(0.1, 1.65, 0.66);
      vGroup.add(winUpper);

      // Warm Accent Light Lamp
      const lamp = new THREE.PointLight(0xffcb6b, 0.6, 4);
      lamp.position.set(0, 1.2, 1.0);
      vGroup.add(lamp);

      return vGroup;
    };

    // --- NORTH GROVE VILLAS (Upper Enclave) ---
    const northVillasGroup = new THREE.Group();
    northVillasGroupRef.current = northVillasGroup;
    masterGroup.add(northVillasGroup);

    // Row 1 (z = -11) & Row 2 (z = -4)
    const northPositions = [
      // Row 1
      [-14, -11], [-11.5, -11], [-9, -11], [-6.5, -11], [-4, -11], [4, -11], [6.5, -11], [9, -11], [11.5, -11], [14, -11],
      // Row 2
      [-14, -4], [-11.5, -4], [-9, -4], [-6.5, -4], [-4, -4], [4, -4], [6.5, -4], [9, -4], [11.5, -4], [14, -4],
    ];

    northPositions.forEach(([vx, vz]) => {
      const villa = createVilla(vx, vz, 0);
      northVillasGroup.add(villa);
    });

    // --- SOUTH GROVE VILLAS (Lower Enclave) ---
    const southVillasGroup = new THREE.Group();
    southVillasGroupRef.current = southVillasGroup;
    masterGroup.add(southVillasGroup);

    // Row 3 (z = 4) & Row 4 (z = 11)
    const southPositions = [
      // Row 3
      [-14, 4], [-11.5, 4], [-9, 4], [-6.5, 4], [-4, 4], [4, 4], [6.5, 4], [9, 4], [11.5, 4], [14, 4],
      // Row 4
      [-14, 11], [-11.5, 11], [-9, 11], [-6.5, 11], [-4, 11], [4, 11], [6.5, 11], [9, 11], [11.5, 11], [14, 11],
    ];

    southPositions.forEach(([vx, vz]) => {
      const villa = createVilla(vx, vz, Math.PI);
      southVillasGroup.add(villa);
    });

    // --- CENTRAL CLUBHOUSE COMPLEX (15,000 Sq.Ft) ---
    const clubhouseGroup = new THREE.Group();
    clubhouseGroupRef.current = clubhouseGroup;
    masterGroup.add(clubhouseGroup);

    // Main Clubhouse Building
    const chGeo = new THREE.BoxGeometry(5.5, 2.4, 3.8);
    const chMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.2 });
    const chBuilding = new THREE.Mesh(chGeo, chMat);
    chBuilding.position.set(0, 1.2, 0);
    chBuilding.castShadow = true;
    chBuilding.receiveShadow = true;
    clubhouseGroup.add(chBuilding);

    // Gold Pergola Sky Lounge Roof
    const chRoofGeo = new THREE.BoxGeometry(6.2, 0.15, 4.4);
    const chRoofMat = new THREE.MeshStandardMaterial({ color: 0xb18a4a, roughness: 0.2, metalness: 0.6 });
    const chRoof = new THREE.Mesh(chRoofGeo, chRoofMat);
    chRoof.position.set(0, 2.48, 0);
    chRoof.castShadow = true;
    clubhouseGroup.add(chRoof);

    // Large Glass Front Window
    const chGlassGeo = new THREE.PlaneGeometry(4.8, 1.8);
    const chGlassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.95 });
    const chGlass = new THREE.Mesh(chGlassGeo, chGlassMat);
    chGlass.position.set(0, 1.1, 1.91);
    clubhouseGroup.add(chGlass);

    // Resort Lap Pool (Crystal Blue)
    const poolDeckGeo = new THREE.BoxGeometry(6.5, 0.08, 3.5);
    const poolDeckMat = new THREE.MeshStandardMaterial({ color: 0xd5d0c6, roughness: 0.4 });
    const poolDeck = new THREE.Mesh(poolDeckGeo, poolDeckMat);
    poolDeck.position.set(0, 0.04, -3.2);
    poolDeck.receiveShadow = true;
    clubhouseGroup.add(poolDeck);

    const poolWaterGeo = new THREE.BoxGeometry(5.2, 0.06, 2.4);
    const poolWaterMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
    });
    const poolWater = new THREE.Mesh(poolWaterGeo, poolWaterMat);
    poolWater.position.set(0, 0.07, -3.2);
    clubhouseGroup.add(poolWater);

    // --- BIO-GREEN CORRIDORS & TREES ---
    const treeTrunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 0.9, 8);
    const treeTrunkMat = new THREE.MeshStandardMaterial({ color: 0x5c3d2e });
    const foliageGeo = new THREE.ConeGeometry(0.7, 1.5, 8);
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x3a6b43, roughness: 0.6 });

    const createTree = (tx: number, tz: number) => {
      const tree = new THREE.Group();
      tree.position.set(tx, 0, tz);

      const trunk = new THREE.Mesh(treeTrunkGeo, treeTrunkMat);
      trunk.position.y = 0.45;
      trunk.castShadow = true;
      tree.add(trunk);

      const foliage = new THREE.Mesh(foliageGeo, foliageMat);
      foliage.position.y = 1.3;
      foliage.castShadow = true;
      tree.add(foliage);

      return tree;
    };

    // Plant Avenue Trees along roads
    for (let x = -15; x <= 15; x += 3) {
      if (Math.abs(x) > 2) {
        masterGroup.add(createTree(x, -1.8));
        masterGroup.add(createTree(x, 1.8));
        masterGroup.add(createTree(x, -9.2));
        masterGroup.add(createTree(x, 9.2));
      }
    }

    // Street Lantern Posts along main avenue
    const poleGeo = new THREE.CylinderGeometry(0.04, 0.05, 1.6, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x202631 });
    const headMat = new THREE.MeshStandardMaterial({ color: 0xb18a4a, emissive: 0xffcb6b, emissiveIntensity: 0.5 });

    for (let px = -13; px <= 13; px += 5.2) {
      const streetPole = new THREE.Group();
      streetPole.position.set(px, 0, 1.8);

      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.y = 0.8;
      streetPole.add(pole);

      const head = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), headMat);
      head.position.y = 1.6;
      streetPole.add(head);

      const light = new THREE.PointLight(0xffd175, 0.8, 6);
      light.position.y = 1.5;
      streetPole.add(light);

      masterGroup.add(streetPole);
    }

    // --- 6. DRAG ORBIT INTERACTION & CONTINUOUS rotation ANIMATION LOOP ---
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Continuous 360 Turntable Slow Rotation when not user interacting
      if (!isDraggingRef.current) {
        rotationAngleRef.current += 0.003; // Smooth 360 rotation speed
      }

      // Update Camera position based on lerp angle & pitch
      const dist = 42;
      camera.position.x = Math.sin(rotationAngleRef.current) * Math.cos(cameraPitchRef.current) * dist;
      camera.position.y = Math.sin(cameraPitchRef.current) * dist;
      camera.position.z = Math.cos(rotationAngleRef.current) * Math.cos(cameraPitchRef.current) * dist;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // --- EVENT LISTENERS FOR DRAG ORBIT ---
    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      setIsInteracting(true);
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };

      if (autoRotateTimerRef.current) clearTimeout(autoRotateTimerRef.current);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;

      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      rotationAngleRef.current -= deltaX * 0.006;
      cameraPitchRef.current = Math.max(0.2, Math.min(1.2, cameraPitchRef.current + deltaY * 0.004));

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        // Resume 360 rotation after 1.5s idle
        autoRotateTimerRef.current = setTimeout(() => {
          setIsInteracting(false);
        }, 1500);
      }
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Window Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 700;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      domElem.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      cancelAnimationFrame(animationFrameId);
      if (autoRotateTimerRef.current) clearTimeout(autoRotateTimerRef.current);
      if (renderer) renderer.dispose();
    };
  }, []);

  // --- SECTOR SELECTION HIGHLIGHT EFFECT ---
  useEffect(() => {
    if (!northVillasGroupRef.current || !southVillasGroupRef.current || !clubhouseGroupRef.current) return;

    const northGroup = northVillasGroupRef.current;
    const southGroup = southVillasGroupRef.current;
    const chGroup = clubhouseGroupRef.current;

    const highlightScale = new THREE.Vector3(1.08, 1.08, 1.08);
    const normalScale = new THREE.Vector3(1, 1, 1);

    if (activeSector === 'NORTH') {
      northGroup.scale.copy(highlightScale);
      southGroup.scale.copy(normalScale);
      chGroup.scale.copy(normalScale);
    } else if (activeSector === 'SOUTH') {
      northGroup.scale.copy(normalScale);
      southGroup.scale.copy(highlightScale);
      chGroup.scale.copy(normalScale);
    } else if (activeSector === 'CLUBHOUSE') {
      northGroup.scale.copy(normalScale);
      southGroup.scale.copy(normalScale);
      chGroup.scale.copy(highlightScale);
    } else {
      northGroup.scale.copy(normalScale);
      southGroup.scale.copy(normalScale);
      chGroup.scale.copy(normalScale);
    }
  }, [activeSector]);

  return (
    <div className="relative w-full h-full min-h-[460px] sm:min-h-[540px] bg-[#F5F2EA] rounded-2xl overflow-hidden border border-[slate-200] shadow-xl select-none flex flex-col justify-between">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[460px] sm:min-h-[540px] cursor-grab active:cursor-grabbing"
      />

      {/* Top Floating HUD Indicator Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-[#F4F0E7]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#F97316]/40 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-ping" />
          <span className="font-mono text-xs font-bold text-[#0F172A] tracking-wider uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            3D CAD MASTERPLAN • {activeSector === 'ALL' ? 'FULL 10-ACRE ESTATE' : `${activeSector} SECTOR`}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-[#F4F0E7]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[slate-200] text-xs font-mono text-[#0F172A]">
          <RotateCw className={`w-3.5 h-3.5 text-[#F97316] ${!isInteracting ? 'animate-spin' : ''}`} />
          <span>{isInteracting ? 'MANUAL ORBIT DRAG' : 'AUTOMATIC 360° TURNTABLE'}</span>
        </div>
      </div>

      {/* Bottom Floating Interaction Help Badge */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="bg-[#0F172A]/95 backdrop-blur-md px-4 py-2 rounded-lg border border-[#F97316]/30 text-white font-mono text-xs flex items-center gap-2 shadow-lg">
          <Move className="w-4 h-4 text-[#F97316] animate-bounce" />
          <span>DRAG MOUSE OR TOUCH TO MANUALLY ROTATE 360°</span>
        </div>

        <div className="bg-[#F4F0E7]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-[slate-200] text-[11px] font-mono text-[#F97316] font-bold">
          189 VILLAS • 15,000 SQ.FT CLUBHOUSE
        </div>
      </div>
    </div>
  );
}
