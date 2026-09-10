'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Evolution3DEngineProps {
  stepIndex: number; // 0 to 6 (7 Steps Total)
}

export default function Evolution3DEngine({ stepIndex }: Evolution3DEngineProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  // Structural Layer References for 7 Step-by-Step Development Phases
  const terrainGroupRef = useRef<THREE.Group | null>(null);
  const surveyGroupRef = useRef<THREE.Group | null>(null);
  const roadsGroupRef = useRef<THREE.Group | null>(null);
  const infraGroupRef = useRef<THREE.Group | null>(null);
  const foundationGroupRef = useRef<THREE.Group | null>(null);
  const villasGroupRef = useRef<THREE.Group | null>(null);
  const lightsGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0a101d); // Deep Dark Luxury Blueprint Navy
    scene.fog = new THREE.FogExp2(0x0a101d, 0.015);

    const aspect = width / height;
    const d = 16;
    const camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      1,
      1000
    );
    camera.position.set(22, 22, 22);
    camera.lookAt(0, 0, 0);

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 3. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffaed, 1.4);
    sunLight.position.set(20, 30, 15);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const goldPointLight = new THREE.PointLight(0xc5a059, 1.2, 35);
    goldPointLight.position.set(0, 8, 0);
    scene.add(goldPointLight);

    // 4. LAYER GROUPS FOR 7 DEVELOPMENT STEPS

    // 4. LAYER GROUPS FOR 7 DEVELOPMENT STEPS ON 3D HILLSIDE TOPOGRAPHY

    // STEP 01: 3D HILLSIDE TERRACED TOPOGRAPHY & LAND CLEARANCE
    const terrainGroup = new THREE.Group();
    terrainGroupRef.current = terrainGroup;
    scene.add(terrainGroup);

    const hillMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const retainingWallMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 });

    // 4 Stepped Hill Slope Terraces
    const terraceHeights = [0, 1.2, 2.5, 3.8];
    const tGeo = new THREE.BoxGeometry(30, 0.6, 7);

    // Terrace 1 (Valley Level, z = 10)
    const t1 = new THREE.Mesh(tGeo, hillMat);
    t1.position.set(0, 0, 10);
    t1.receiveShadow = true;
    terrainGroup.add(t1);

    // Terrace 2 (Lower Slope Level, z = 3)
    const t2 = new THREE.Mesh(tGeo, hillMat);
    t2.position.set(0, 1.2, 3);
    t2.receiveShadow = true;
    terrainGroup.add(t2);

    const w2 = new THREE.Mesh(new THREE.BoxGeometry(30, 1.2, 0.3), retainingWallMat);
    w2.position.set(0, 0.6, 6.5);
    w2.receiveShadow = true;
    terrainGroup.add(w2);

    // Terrace 3 (Upper Slope Level, z = -4)
    const t3 = new THREE.Mesh(tGeo, hillMat);
    t3.position.set(0, 2.5, -4);
    t3.receiveShadow = true;
    terrainGroup.add(t3);

    const w3 = new THREE.Mesh(new THREE.BoxGeometry(30, 1.3, 0.3), retainingWallMat);
    w3.position.set(0, 1.85, -0.5);
    w3.receiveShadow = true;
    terrainGroup.add(w3);

    // Terrace 4 (Summit Hilltop Level, z = -11)
    const t4 = new THREE.Mesh(tGeo, hillMat);
    t4.position.set(0, 3.8, -11);
    t4.receiveShadow = true;
    terrainGroup.add(t4);

    const w4 = new THREE.Mesh(new THREE.BoxGeometry(30, 1.3, 0.3), retainingWallMat);
    w4.position.set(0, 3.15, -7.5);
    w4.receiveShadow = true;
    terrainGroup.add(w4);

    // STEP 02: 3D LASER ELEVATION CONTOURS & SURVEY BEACONS
    const surveyGroup = new THREE.Group();
    surveyGroupRef.current = surveyGroup;
    scene.add(surveyGroup);

    const gridHelper = new THREE.GridHelper(30, 30, 0x38bdf8, 0x334155);
    gridHelper.position.y = 0.05;
    surveyGroup.add(gridHelper);

    // Laser Beacons Positioned on Hill Slope
    const beaconCoords = [
      [-12, 0.6, 10], [12, 0.6, 10],
      [-12, 1.8, 3],  [12, 1.8, 3],
      [-12, 3.1, -4], [12, 3.1, -4],
      [-12, 4.4, -11],[12, 4.4, -11],
    ];

    beaconCoords.forEach(([bx, by, bz]) => {
      const beaconGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.2, 6);
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(bx, by, bz);
      surveyGroup.add(beacon);
    });

    // STEP 03: WINDING SERPENTINE HILL ACCESS ROADS & BOULEVARDS ("PROPER WAYS")
    const roadsGroup = new THREE.Group();
    roadsGroupRef.current = roadsGroup;
    scene.add(roadsGroup);

    const roadShape = new THREE.Shape();
    roadShape.moveTo(-13, -13);
    roadShape.lineTo(13, -13);
    roadShape.lineTo(13, 13);
    roadShape.lineTo(-13, 13);
    roadShape.closePath();

    const roadHole = new THREE.Path();
    roadHole.moveTo(-11, -11);
    roadHole.lineTo(-11, 11);
    roadHole.lineTo(11, 11);
    roadHole.lineTo(11, -11);
    roadHole.closePath();
    roadShape.holes.push(roadHole);

    const roadMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const roadMesh = new THREE.Mesh(new THREE.ShapeGeometry(roadShape), roadMat);
    roadMesh.rotation.x = -Math.PI / 2;
    roadMesh.position.y = 0.08;
    roadsGroup.add(roadMesh);

    // STEP 04: SUBSURFACE INFRASTRUCTURE & GLOW FIBER
    const infraGroup = new THREE.Group();
    infraGroupRef.current = infraGroup;
    scene.add(infraGroup);

    const fiberGeo = new THREE.BoxGeometry(26, 0.08, 0.2);
    const fiberMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
    const f1 = new THREE.Mesh(fiberGeo, fiberMat);
    f1.position.set(0, 0.1, -12);
    infraGroup.add(f1);

    const f2 = new THREE.Mesh(fiberGeo, fiberMat);
    f2.position.set(0, 0.1, 12);
    infraGroup.add(f2);

    // STEP 05: STEPPED FOUNDATION BEAMS ON HILL TERRACES
    const foundationGroup = new THREE.Group();
    foundationGroupRef.current = foundationGroup;
    scene.add(foundationGroup);

    const beamGeo = new THREE.BoxGeometry(1.1, 0.16, 1.4);
    const beamMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7 });

    const terraceTiers = [
      { z: 10, baseH: 0.38 },   // Valley Tier
      { z: 3, baseH: 1.58 },    // Lower Slope Tier
      { z: -4, baseH: 2.88 },   // Upper Slope Tier
      { z: -11, baseH: 4.18 },  // Summit Hilltop Tier
    ];

    terraceTiers.forEach((tier) => {
      for (let c = 0; c < 7; c++) {
        const bx = -7 + c * 2.4;
        const bz = tier.z;
        if (Math.abs(bx) < 2 && Math.abs(bz) < 2) continue;

        const beam = new THREE.Mesh(beamGeo, beamMat);
        beam.position.set(bx, tier.baseH, bz);
        beam.receiveShadow = true;
        foundationGroup.add(beam);
      }
    });

    // STEP 06: SPLIT-LEVEL HILLSIDE VILLAS & CANTILEVER BALCONIES
    const villasGroup = new THREE.Group();
    villasGroupRef.current = villasGroup;
    scene.add(villasGroup);

    const villaWallGeo = new THREE.BoxGeometry(0.9, 1.2, 1.2);
    const villaWallMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const slabGeo = new THREE.BoxGeometry(1.1, 0.12, 1.4);
    const slabMat = new THREE.MeshStandardMaterial({ color: 0xc5a059, roughness: 0.3 });

    terraceTiers.forEach((tier) => {
      for (let c = 0; c < 7; c++) {
        const vx = -7 + c * 2.4;
        const vz = tier.z;
        const vy = tier.baseH;
        if (Math.abs(vx) < 2 && Math.abs(vz) < 2) continue;

        const wall = new THREE.Mesh(villaWallGeo, villaWallMat);
        wall.position.set(vx, vy + 0.67, vz);
        wall.castShadow = true;
        villasGroup.add(wall);

        const slab = new THREE.Mesh(slabGeo, slabMat);
        slab.position.set(vx, vy + 1.33, vz);
        slab.castShadow = true;
        villasGroup.add(slab);
      }
    });

    // STEP 07: STREET LIGHT POLES & WARM VILLA WINDOW ILLUMINATION
    const lightsGroup = new THREE.Group();
    lightsGroupRef.current = lightsGroup;
    scene.add(lightsGroup);

    const lightPlaneGeo = new THREE.PlaneGeometry(0.4, 0.4);
    const lightPlaneMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });

    // 1. Villa Interior Window Lights Beaming out across Hill Terraces
    terraceTiers.forEach((tier) => {
      for (let c = 0; c < 7; c++) {
        const lx = -7 + c * 2.4;
        const lz = tier.z;
        const ly = tier.baseH;
        if (Math.abs(lx) < 2 && Math.abs(lz) < 2) continue;

        const lp = new THREE.Mesh(lightPlaneGeo, lightPlaneMat);
        lp.position.set(lx, ly + 0.67, lz + 0.61);
        lightsGroup.add(lp);
      }
    });

    // 2. 3D Boulevard & Hillside Street Light Poles
    const poleGeo = new THREE.CylinderGeometry(0.05, 0.07, 1.8, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 });
    const lanternHeadGeo = new THREE.BoxGeometry(0.3, 0.25, 0.3);
    const lanternHeadMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });

    const streetLightCoords = [
      [-12, 0.3, 12], [0, 0.3, 12], [12, 0.3, 12],
      [-12, 1.5, 5],  [0, 1.5, 5],  [12, 1.5, 5],
      [-12, 2.8, -2], [0, 2.8, -2], [12, 2.8, -2],
      [-12, 4.1, -9], [0, 4.1, -9], [12, 4.1, -9],
    ];

    streetLightCoords.forEach(([sx, sy, sz]) => {
      const sGroup = new THREE.Group();
      sGroup.position.set(sx, sy, sz);

      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.y = 0.9;
      sGroup.add(pole);

      const head = new THREE.Mesh(lanternHeadGeo, lanternHeadMat);
      head.position.y = 1.8;
      sGroup.add(head);

      const streetPointLight = new THREE.PointLight(0xf59e0b, 2.5, 8);
      streetPointLight.position.y = 1.7;
      sGroup.add(streetPointLight);

      lightsGroup.add(sGroup);
    });

    // 5. ANIMATION LOOP
    let animationFrameId: number;
    let angle = 0.3;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Slow 3D isometric camera rotation (Calm & Soothing)
      angle += 0.0006;
      const radius = 26;
      camera.position.x = Math.sin(angle) * radius;
      camera.position.z = Math.cos(angle) * radius;
      camera.position.y = 20;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 6. RESIZE HANDLER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const asp = w / h;

      camera.left = -d * asp;
      camera.right = d * asp;
      camera.top = d;
      camera.bottom = -d;
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

  // Update 3D Stage Visibility based on stepIndex (0 to 6)
  useEffect(() => {
    if (terrainGroupRef.current) terrainGroupRef.current.visible = stepIndex >= 0;
    if (surveyGroupRef.current) surveyGroupRef.current.visible = stepIndex >= 1;
    if (roadsGroupRef.current) roadsGroupRef.current.visible = stepIndex >= 2;
    if (infraGroupRef.current) infraGroupRef.current.visible = stepIndex >= 3;
    if (foundationGroupRef.current) foundationGroupRef.current.visible = stepIndex >= 4;
    if (villasGroupRef.current) villasGroupRef.current.visible = stepIndex >= 5;
    if (lightsGroupRef.current) lightsGroupRef.current.visible = stepIndex >= 6;
  }, [stepIndex]);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] bg-[#0a101d] rounded-xl overflow-hidden border border-amber-500/30 shadow-2xl">
      <div ref={mountRef} className="w-full h-full min-h-[380px] sm:min-h-[460px] cursor-grab active:cursor-grabbing" />
    </div>
  );
}
