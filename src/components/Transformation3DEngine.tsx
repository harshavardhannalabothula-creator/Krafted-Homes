'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Transformation3DEngineProps {
  stageIndex: number; // 0 to 7
}

export default function Transformation3DEngine({ stageIndex }: Transformation3DEngineProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  // Group References for Stage Animation Control
  const terrainGroupRef = useRef<THREE.Group | null>(null);
  const boundaryGroupRef = useRef<THREE.Group | null>(null);
  const roadGroupRef = useRef<THREE.Group | null>(null);
  const foundationGroupRef = useRef<THREE.Group | null>(null);
  const structureGroupRef = useRef<THREE.Group | null>(null);
  const villaGroupRef = useRef<THREE.Group | null>(null);
  const landscapeGroupRef = useRef<THREE.Group | null>(null);
  const clubhouseGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#101722'); // Deep Ink Navy
    scene.fog = new THREE.FogExp2('#101722', 0.012);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 24, 38);
    camera.lookAt(0, 2, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setClearColor('#101722', 1);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    } catch (e) {
      console.error('WebGL Initialization Error:', e);
      return;
    }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup (Atmospheric Architectural Lighting)
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#fff5e6', 1.4);
    sunLight.position.set(25, 35, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const goldPointLight = new THREE.PointLight('#F97316', 2.0, 60);
    goldPointLight.position.set(-15, 20, -15);
    scene.add(goldPointLight);

    // Master Transformation Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Color Palette Materials
    const terrainMat = new THREE.MeshStandardMaterial({ color: '#27382D', roughness: 0.8, metalness: 0.1 });
    const clearedTerrainMat = new THREE.MeshStandardMaterial({ color: '#101722', roughness: 0.7, metalness: 0.1 });
    const boundaryMat = new THREE.MeshBasicMaterial({ color: '#F97316', wireframe: true, transparent: true, opacity: 0.6 });
    const roadMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.5 });
    const lineMat = new THREE.MeshBasicMaterial({ color: '#F97316' });
    const foundationMat = new THREE.MeshStandardMaterial({ color: '#B8B0A1', roughness: 0.5 });
    const structureMat = new THREE.MeshStandardMaterial({ color: '#F97316', roughness: 0.3, metalness: 0.5 });
    const villaWallMat = new THREE.MeshStandardMaterial({ color: '#F3EFE6', roughness: 0.3 });
    const villaRoofMat = new THREE.MeshStandardMaterial({ color: '#101722', roughness: 0.4 });
    const treeTopMat = new THREE.MeshStandardMaterial({ color: '#27382D', roughness: 0.7 });
    const treeTrunkMat = new THREE.MeshStandardMaterial({ color: '#4a3728', roughness: 0.9 });
    const poolMat = new THREE.MeshStandardMaterial({ color: '#0284c7', roughness: 0.1, metalness: 0.8 });

    // -------------------------------------------------------------
    // STAGE 01 — THE LAND (Untouched Natural Terrain Mesh)
    // -------------------------------------------------------------
    const terrainGroup = new THREE.Group();
    terrainGroupRef.current = terrainGroup;
    masterGroup.add(terrainGroup);

    const hillGeo = new THREE.CylinderGeometry(30, 32, 2, 48);
    const hillMesh = new THREE.Mesh(hillGeo, terrainMat);
    hillMesh.position.y = -1;
    hillMesh.receiveShadow = true;
    terrainGroup.add(hillMesh);

    // Natural Soil Contour Lines
    const contourGeo = new THREE.RingGeometry(29.8, 30.2, 48);
    const contourMesh = new THREE.Mesh(contourGeo, boundaryMat);
    contourMesh.rotation.x = Math.PI / 2;
    terrainGroup.add(contourMesh);

    // -------------------------------------------------------------
    // STAGE 02 — LAND CLEARING (Development Boundary & Grid)
    // -------------------------------------------------------------
    const boundaryGroup = new THREE.Group();
    boundaryGroupRef.current = boundaryGroup;
    masterGroup.add(boundaryGroup);

    const gridHelper = new THREE.GridHelper(32, 32, '#F97316', '#27382D');
    gridHelper.position.y = 0.02;
    boundaryGroup.add(gridHelper);

    // 4 Corner Laser Boundary Beacons
    const beaconGeo = new THREE.CylinderGeometry(0.2, 0.2, 3.5, 16);
    const cornerPositions = [[-14, -14], [14, -14], [14, 14], [-14, 14]];
    cornerPositions.forEach(([cx, cz]) => {
      const beacon = new THREE.Mesh(beaconGeo, structureMat);
      beacon.position.set(cx, 1.75, cz);
      boundaryGroup.add(beacon);

      const light = new THREE.PointLight('#F97316', 1.5, 12);
      light.position.set(cx, 3.5, cz);
      boundaryGroup.add(light);
    });

    // -------------------------------------------------------------
    // STAGE 03 — SITE PREPARATION (Roads, Pathways, Light Poles)
    // -------------------------------------------------------------
    const roadGroup = new THREE.Group();
    roadGroupRef.current = roadGroup;
    masterGroup.add(roadGroup);

    const roadPoints = [
      new THREE.Vector3(-14, 0.08, 14),
      new THREE.Vector3(-6, 0.08, 4),
      new THREE.Vector3(4, 0.08, -4),
      new THREE.Vector3(12, 0.08, -12),
    ];
    const roadCurve = new THREE.CatmullRomCurve3(roadPoints);
    const roadTubeGeo = new THREE.TubeGeometry(roadCurve, 64, 1.2, 8, false);
    const roadMesh = new THREE.Mesh(roadTubeGeo, roadMat);
    roadGroup.add(roadMesh);

    const lineTubeGeo = new THREE.TubeGeometry(roadCurve, 64, 0.1, 6, false);
    const lineMesh = new THREE.Mesh(lineTubeGeo, lineMat);
    roadGroup.add(lineMesh);

    // 3D Street Light Poles
    const poleGeo = new THREE.CylinderGeometry(0.06, 0.08, 1.8, 8);
    const lampHeadMat = new THREE.MeshBasicMaterial({ color: '#fef08a' });

    for (let i = 0; i <= 64; i += 12) {
      const pt = roadCurve.getPoint(i / 64);
      const pole = new THREE.Mesh(poleGeo, roadMat);
      pole.position.set(pt.x + 1.2, pt.y + 0.9, pt.z);
      roadGroup.add(pole);

      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 0.3), lampHeadMat);
      lamp.position.set(pt.x + 1.2, pt.y + 1.8, pt.z);
      roadGroup.add(lamp);

      const light = new THREE.PointLight('#f59e0b', 1.8, 8);
      light.position.set(pt.x + 1.2, pt.y + 1.7, pt.z);
      roadGroup.add(light);
    }

    // -------------------------------------------------------------
    // STAGE 04 — FOUNDATION (Concrete Footings Across 4 Stepped Terraces)
    // -------------------------------------------------------------
    const foundationGroup = new THREE.Group();
    foundationGroupRef.current = foundationGroup;
    masterGroup.add(foundationGroup);

    const villaLayouts = [
      { x: -8, z: -8 }, { x: -3, z: -8 }, { x: 2, z: -8 }, { x: 7, z: -8 },
      { x: -8, z: -2 }, { x: -3, z: -2 }, { x: 2, z: -2 }, { x: 7, z: -2 },
      { x: -8, z: 4 },  { x: -3, z: 4 },  { x: 2, z: 4 },  { x: 7, z: 4 },
      { x: -8, z: 10 }, { x: -3, z: 10 }, { x: 2, z: 10 }, { x: 7, z: 10 },
    ];

    const padGeo = new THREE.BoxGeometry(2.4, 0.3, 2.4);
    villaLayouts.forEach((pos) => {
      const pad = new THREE.Mesh(padGeo, foundationMat);
      pad.position.set(pos.x, 0.15, pos.z);
      pad.castShadow = true;
      foundationGroup.add(pad);
    });

    // -------------------------------------------------------------
    // STAGE 05 — STRUCTURE (Columns, Slabs, Split-Level Framework)
    // -------------------------------------------------------------
    const structureGroup = new THREE.Group();
    structureGroupRef.current = structureGroup;
    masterGroup.add(structureGroup);

    const columnGeo = new THREE.CylinderGeometry(0.1, 0.1, 2.2, 8);
    const slabGeo = new THREE.BoxGeometry(2.5, 0.15, 2.5);

    villaLayouts.forEach((pos) => {
      const colGroup = new THREE.Group();
      colGroup.position.set(pos.x, 0.3, pos.z);

      // 4 Structural Columns
      [[-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]].forEach(([cx, cz]) => {
        const col = new THREE.Mesh(columnGeo, structureMat);
        col.position.set(cx, 1.1, cz);
        colGroup.add(col);
      });

      // Split-Level Upper Floor Slab
      const slab = new THREE.Mesh(slabGeo, foundationMat);
      slab.position.set(0, 2.2, 0);
      colGroup.add(slab);

      structureGroup.add(colGroup);
    });

    // -------------------------------------------------------------
    // STAGE 06 — VILLAS (Walls, Glazing, Roofs, Terraces)
    // -------------------------------------------------------------
    const villaGroup = new THREE.Group();
    villaGroupRef.current = villaGroup;
    masterGroup.add(villaGroup);

    const bodyGeo = new THREE.BoxGeometry(2.2, 1.8, 2.2);
    const roofGeo = new THREE.BoxGeometry(2.3, 0.3, 2.3);

    villaLayouts.forEach((pos) => {
      const villa = new THREE.Group();
      villa.position.set(pos.x, 0.3, pos.z);

      const body = new THREE.Mesh(bodyGeo, villaWallMat);
      body.position.y = 0.9;
      body.castShadow = true;
      villa.add(body);

      const roof = new THREE.Mesh(roofGeo, villaRoofMat);
      roof.position.y = 1.95;
      roof.castShadow = true;
      villa.add(roof);

      villaGroup.add(villa);
    });

    // -------------------------------------------------------------
    // STAGE 07 — LANDSCAPE (3D Trees, Green Lawns, Water Courts)
    // -------------------------------------------------------------
    const landscapeGroup = new THREE.Group();
    landscapeGroupRef.current = landscapeGroup;
    masterGroup.add(landscapeGroup);

    const treeTopGeo = new THREE.IcosahedronGeometry(0.7, 1);
    const treeTrunkGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.9);

    for (let i = 0; i < 28; i++) {
      const angle = (i / 28) * Math.PI * 2;
      const radius = 11 + (i % 3) * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const tree = new THREE.Group();
      tree.position.set(x, 0.45, z);

      const trunk = new THREE.Mesh(treeTrunkGeo, treeTrunkMat);
      tree.add(trunk);

      const top = new THREE.Mesh(treeTopGeo, treeTopMat);
      top.position.y = 0.7;
      tree.add(top);

      landscapeGroup.add(tree);
    }

    // Central Eco Pond / Water Court
    const pondGeo = new THREE.CylinderGeometry(5, 5, 0.15, 32);
    const pondMesh = new THREE.Mesh(pondGeo, poolMat);
    pondMesh.position.set(0, 0.08, -1);
    landscapeGroup.add(pondMesh);

    // -------------------------------------------------------------
    // STAGE 08 — THE LIVING COMMUNITY (Hilltop Clubhouse & Full Sanctuary)
    // -------------------------------------------------------------
    const clubhouseGroup = new THREE.Group();
    clubhouseGroupRef.current = clubhouseGroup;
    masterGroup.add(clubhouseGroup);

    const chBody = new THREE.Mesh(new THREE.BoxGeometry(6, 2.2, 4), villaWallMat);
    chBody.position.set(0, 1.1, -12);
    chBody.castShadow = true;
    clubhouseGroup.add(chBody);

    const chRoof = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.3, 4.4), structureMat);
    chRoof.position.set(0, 2.35, -12);
    clubhouseGroup.add(chRoof);

    const pool = new THREE.Mesh(new THREE.BoxGeometry(7, 0.2, 3), poolMat);
    pool.position.set(0, 0.1, -9);
    clubhouseGroup.add(pool);

    // 3. Animation Loop & Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = x * 0.2;
      mouseY = y * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Continuous Slow Majestic Camera Rotation Sweep
      masterGroup.rotation.y += 0.002;

      targetRotY += (mouseX - targetRotY) * 0.05;
      targetRotX += (mouseY - targetRotX) * 0.05;

      camera.position.x = Math.sin(targetRotY) * 38;
      camera.position.z = Math.cos(targetRotY) * 38;
      camera.position.y = 24 + targetRotX * 6;
      camera.lookAt(0, 2, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (renderer) renderer.dispose();
    };
  }, []);

  // Update Visual Stage Visibility & Progressive Reveal Animations (0 to 7)
  useEffect(() => {
    // 0: LAND
    if (terrainGroupRef.current) {
      terrainGroupRef.current.visible = true;
    }
    // 1: LAND CLEARING
    if (boundaryGroupRef.current) {
      boundaryGroupRef.current.visible = stageIndex >= 1;
      boundaryGroupRef.current.scale.setScalar(stageIndex >= 1 ? 1 : 0.01);
    }
    // 2: SITE PREPARATION
    if (roadGroupRef.current) {
      roadGroupRef.current.visible = stageIndex >= 2;
      roadGroupRef.current.scale.setScalar(stageIndex >= 2 ? 1 : 0.01);
    }
    // 3: FOUNDATION
    if (foundationGroupRef.current) {
      foundationGroupRef.current.visible = stageIndex >= 3;
      foundationGroupRef.current.position.y = stageIndex >= 3 ? 0 : -2;
    }
    // 4: STRUCTURE
    if (structureGroupRef.current) {
      structureGroupRef.current.visible = stageIndex >= 4;
      structureGroupRef.current.scale.y = stageIndex >= 4 ? 1 : 0.01;
    }
    // 5: VILLAS
    if (villaGroupRef.current) {
      villaGroupRef.current.visible = stageIndex >= 5;
      villaGroupRef.current.scale.setScalar(stageIndex >= 5 ? 1 : 0.01);
    }
    // 6: LANDSCAPE
    if (landscapeGroupRef.current) {
      landscapeGroupRef.current.visible = stageIndex >= 6;
      landscapeGroupRef.current.scale.setScalar(stageIndex >= 6 ? 1 : 0.01);
    }
    // 7: THE LIVING COMMUNITY
    if (clubhouseGroupRef.current) {
      clubhouseGroupRef.current.visible = stageIndex >= 7;
      clubhouseGroupRef.current.position.y = stageIndex >= 7 ? 0 : -4;
    }
  }, [stageIndex]);

  return (
    <div className="relative w-full h-full bg-[#101722] overflow-hidden select-none">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
