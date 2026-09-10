'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Masterplan3DConstructionCanvasProps {
  currentStage: number; // 0 to 5
}

export default function Masterplan3DConstructionCanvas({ currentStage }: Masterplan3DConstructionCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const stageGroupRef = useRef<THREE.Group | null>(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationAngleRef = useRef(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // 1. Scene setup (Deep Charcoal Navy Background matching palette)
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#111722');
    scene.fog = new THREE.FogExp2('#111722', 0.012);

    // 2. Consistent Elevated Architectural Camera Position (Isometric perspective)
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.set(0, 26, 38);
    camera.lookAt(0, -2, 0);

    // 3. WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setClearColor('#111722', 1);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    } catch (e) {
      console.error('WebGL error:', e);
      return;
    }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Vibrant Luxury Lighting (Warm Sun + Gold Accent Lights)
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.85);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#FDE68A', 1.5);
    sunLight.position.set(25, 40, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight('#38bdf8', 0.45);
    fillLight.position.set(-20, 20, -20);
    scene.add(fillLight);

    const goldPoint = new THREE.PointLight('#B18A4A', 2.0, 50);
    goldPoint.position.set(0, 12, 0);
    scene.add(goldPoint);

    // 5. Root Group for Site Model
    const stageGroup = new THREE.Group();
    stageGroupRef.current = stageGroup;
    scene.add(stageGroup);

    // High-End Materials Palette (Matching Project 10/10 Colors)
    const terrainGreenMat = new THREE.MeshStandardMaterial({ color: '#345844', roughness: 0.7 }); // Rich Deep Olive Green
    const terrainGradedMat = new THREE.MeshStandardMaterial({ color: '#6B5B49', roughness: 0.85 }); // Warm Soil
    const asphaltRoadMat = new THREE.MeshStandardMaterial({ color: '#1E2430', roughness: 0.35 }); // Sleek Slate Road
    const roadLineMat = new THREE.MeshBasicMaterial({ color: '#B18A4A' }); // Muted Gold Center Lines
    const villaWallMat = new THREE.MeshStandardMaterial({ color: '#F4F0E7', roughness: 0.3 }); // Warm Ivory
    const villaRoofMat = new THREE.MeshStandardMaterial({ color: '#111722', roughness: 0.4 }); // Deep Navy
    const glassMat = new THREE.MeshStandardMaterial({ color: '#38BDF8', roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.75 });
    const goldMat = new THREE.MeshStandardMaterial({ color: '#B18A4A', roughness: 0.3, metalness: 0.6 }); // Antique Gold
    const treeTrunkMat = new THREE.MeshStandardMaterial({ color: '#4A3525' });
    const treeFoliageMat = new THREE.MeshStandardMaterial({ color: '#446E52', roughness: 0.5 });
    const poolWaterMat = new THREE.MeshStandardMaterial({ color: '#0284C7', roughness: 0.1, metalness: 0.85 });
    const boundaryLineMat = new THREE.MeshBasicMaterial({ color: '#B18A4A' });

    // Build Project Sign Post (Stays on corner across all stages)
    const signGroup = new THREE.Group();
    signGroup.position.set(-14, 0, 14);
    
    const postGeo = new THREE.CylinderGeometry(0.14, 0.14, 2.6, 8);
    const postMesh = new THREE.Mesh(postGeo, goldMat);
    postMesh.position.y = 1.3;
    signGroup.add(postMesh);

    const boardGeo = new THREE.BoxGeometry(3.8, 1.9, 0.2);
    const boardMesh = new THREE.Mesh(boardGeo, new THREE.MeshStandardMaterial({ color: '#111722', roughness: 0.3 }));
    boardMesh.position.y = 2.5;
    signGroup.add(boardMesh);

    const goldBorderGeo = new THREE.BoxGeometry(3.9, 2.0, 0.15);
    const goldBorderMesh = new THREE.Mesh(goldBorderGeo, goldMat);
    goldBorderMesh.position.y = 2.5;
    signGroup.add(goldBorderMesh);

    stageGroup.add(signGroup);

    // Build Outer 10-Acre Perimeter Boundary Line
    const boundaryPoints = [
      new THREE.Vector3(-16, 0.06, -16),
      new THREE.Vector3(16, 0.06, -16),
      new THREE.Vector3(16, 0.06, 16),
      new THREE.Vector3(-16, 0.06, 16),
      new THREE.Vector3(-16, 0.06, -16),
    ];
    const boundaryGeo = new THREE.BufferGeometry().setFromPoints(boundaryPoints);
    const boundaryLine = new THREE.Line(boundaryGeo, boundaryLineMat);
    stageGroup.add(boundaryLine);

    // 6. BUILD SCENE ACCORDING TO CURRENT STAGE (0 to 5)
    
    // BASE TERRAIN
    const isGraded = currentStage >= 2;
    const terrainGeo = new THREE.PlaneGeometry(36, 36, 32, 32);
    const posAttr = terrainGeo.attributes.position;
    
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const zNoise = isGraded ? Math.sin(x * 0.1) * 0.2 : Math.sin(x * 0.2) * Math.cos(y * 0.2) * 1.4;
      posAttr.setZ(i, zNoise);
    }
    terrainGeo.computeVertexNormals();

    const terrainMesh = new THREE.Mesh(terrainGeo, isGraded ? terrainGradedMat : terrainGreenMat);
    terrainMesh.rotation.x = -Math.PI / 2;
    terrainMesh.receiveShadow = true;
    stageGroup.add(terrainMesh);

    // STAGE 01: RAW UNTOUCHED LAND (3D Trees & Vegetation)
    if (currentStage === 0) {
      const treePositions = [
        [-10, -8], [-6, -12], [8, -10], [12, -4], [-12, 6], [10, 8], [-4, 10], [6, 12], [0, -6]
      ];
      treePositions.forEach(([tx, tz]) => {
        const tree = new THREE.Group();
        tree.position.set(tx, 0, tz);
        
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 2, 8), treeTrunkMat);
        trunk.position.y = 1;
        tree.add(trunk);

        const foliage = new THREE.Mesh(new THREE.ConeGeometry(1.4, 3, 8), treeFoliageMat);
        foliage.position.y = 3;
        foliage.castShadow = true;
        tree.add(foliage);

        stageGroup.add(tree);
      });
    }

    // STAGE 02: APPROVALS & LAYOUT PLANNING (Survey Pegs & Grid Lines)
    if (currentStage >= 1) {
      const pegPositions = [
        [-12, -12], [12, -12], [-12, 12], [12, 12], [0, -12], [0, 12], [-12, 0], [12, 0]
      ];
      pegPositions.forEach(([px, pz]) => {
        const peg = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.8, 8), goldMat);
        peg.position.set(px, 0.9, pz);
        stageGroup.add(peg);
      });

      const gridHelper = new THREE.GridHelper(32, 16, '#B18A4A', '#38BDF8');
      gridHelper.position.y = 0.08;
      stageGroup.add(gridHelper);
    }

    // STAGE 04+: ROADS & INFRASTRUCTURE
    if (currentStage >= 3) {
      const roadGeo = new THREE.PlaneGeometry(32, 3.5);
      const mainRoad = new THREE.Mesh(roadGeo, asphaltRoadMat);
      mainRoad.rotation.x = -Math.PI / 2;
      mainRoad.position.set(0, 0.1, 0);
      stageGroup.add(mainRoad);

      const crossRoad = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 32), asphaltRoadMat);
      crossRoad.rotation.x = -Math.PI / 2;
      crossRoad.position.set(0, 0.11, 0);
      stageGroup.add(crossRoad);

      const lineGeo = new THREE.PlaneGeometry(32, 0.2);
      const centerLine = new THREE.Mesh(lineGeo, roadLineMat);
      centerLine.rotation.x = -Math.PI / 2;
      centerLine.position.set(0, 0.12, 0);
      stageGroup.add(centerLine);
    }

    // STAGE 05+: VILLAS RISING & STRUCTURES
    if (currentStage >= 4) {
      const villaPositions = [
        [-8, -8], [-4, -8], [4, -8], [8, -8],
        [-8, 8], [-4, 8], [4, 8], [8, 8],
        [-10, 0], [-6, 0], [6, 0], [10, 0]
      ];

      villaPositions.forEach(([vx, vz]) => {
        const villaGroup = new THREE.Group();
        villaGroup.position.set(vx, 0.12, vz);

        const baseSlab = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.3, 3.2), villaWallMat);
        baseSlab.position.y = 0.15;
        villaGroup.add(baseSlab);

        if (currentStage >= 4) {
          const mainVol = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.8, 2.6), villaWallMat);
          mainVol.position.y = 1.2;
          mainVol.castShadow = true;
          villaGroup.add(mainVol);

          const windowMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.2, 0.1), glassMat);
          windowMesh.position.set(0, 1.2, 1.32);
          villaGroup.add(windowMesh);

          const roof = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.3, 2.8), villaRoofMat);
          roof.position.y = 2.25;
          villaGroup.add(roof);
        }

        stageGroup.add(villaGroup);
      });
    }

    // STAGE 06: COMPLETED COMMUNITY (Clubhouse Pool, Trees, Gardens & Warm Lights)
    if (currentStage === 5) {
      const clubhouse = new THREE.Group();
      clubhouse.position.set(0, 0.12, -10);

      const chMain = new THREE.Mesh(new THREE.BoxGeometry(8, 2.8, 4.5), villaWallMat);
      chMain.position.y = 1.4;
      chMain.castShadow = true;
      clubhouse.add(chMain);

      const chGlass = new THREE.Mesh(new THREE.BoxGeometry(7.2, 2.0, 0.1), glassMat);
      chGlass.position.set(0, 1.4, 2.3);
      clubhouse.add(chGlass);

      const chRoof = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.3, 5), villaRoofMat);
      chRoof.position.y = 2.95;
      clubhouse.add(chRoof);

      const pool = new THREE.Mesh(new THREE.BoxGeometry(6, 0.2, 3), poolWaterMat);
      pool.position.set(0, 0.1, -4.5);
      clubhouse.add(pool);

      stageGroup.add(clubhouse);

      const gardenTrees = [
        [-13, -6], [13, -6], [-13, 6], [13, 6], [-2, -3], [2, -3], [-12, -12], [12, -12]
      ];
      gardenTrees.forEach(([tx, tz]) => {
        const tree = new THREE.Group();
        tree.position.set(tx, 0.12, tz);
        
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 1.6, 8), treeTrunkMat);
        trunk.position.y = 0.8;
        tree.add(trunk);

        const foliage = new THREE.Mesh(new THREE.SphereGeometry(1.2, 8, 8), treeFoliageMat);
        foliage.position.y = 2.2;
        tree.add(foliage);

        stageGroup.add(tree);
      });
    }

    // 7. Mouse Drag Horizontal Orbit Controls
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !stageGroupRef.current) return;

      const deltaX = e.clientX - previousMousePositionRef.current.x;
      rotationAngleRef.current += deltaX * 0.008;

      rotationAngleRef.current = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, rotationAngleRef.current));
      stageGroupRef.current.rotation.y = rotationAngleRef.current;

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // 8. Animation Render Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDraggingRef.current && stageGroupRef.current) {
        stageGroupRef.current.rotation.y = Math.sin(Date.now() * 0.0005) * 0.08;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [currentStage]);

  return (
    <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing select-none" />
  );
}
