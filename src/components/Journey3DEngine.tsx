'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Journey3DEngineProps {
  stageIndex: number;
}

export default function Journey3DEngine({ stageIndex }: Journey3DEngineProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0b1320');
    scene.fog = new THREE.FogExp2('#0b1320', 0.015);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 18, 30);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setClearColor('#0b1320', 1);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
    } catch (e) {
      console.error("WebGL error in Journey3DEngine:", e);
      return;
    }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 2. Balanced Luxury Lighting
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight('#fff5e6', 1.2);
    mainLight.position.set(20, 30, 15);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const goldPointLight = new THREE.PointLight('#B18A4A', 1.5, 50);
    goldPointLight.position.set(-10, 15, -10);
    scene.add(goldPointLight);

    // 3. Stage Content Root Group
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // Materials Palette
    const terrainMat = new THREE.MeshStandardMaterial({ color: '#162235', roughness: 0.8, metalness: 0.1 });
    const stoneWallMat = new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.6, metalness: 0.2 });
    const cadGridMat = new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true, transparent: true, opacity: 0.4 });
    const goldMat = new THREE.MeshStandardMaterial({ color: '#B18A4A', roughness: 0.3, metalness: 0.5 });
    const greenMat = new THREE.MeshStandardMaterial({ color: '#66705A', roughness: 0.7 });
    const waterMat = new THREE.MeshStandardMaterial({ color: '#0284c7', roughness: 0.1, metalness: 0.8 });
    const villaMat = new THREE.MeshStandardMaterial({ color: '#F4F0E7', roughness: 0.3 });
    const roofMat = new THREE.MeshStandardMaterial({ color: '#111722', roughness: 0.4 });
    const poleMat = new THREE.MeshStandardMaterial({ color: '#1e293b', metalness: 0.8 });
    const lampMat = new THREE.MeshBasicMaterial({ color: '#fef08a' });

    // 4. Build Dynamic 3D Scene based on Stage Index (0 through 7)
    if (stageIndex === 0) {
      // STAGE 01: RAW TERRAIN & ELEVATION SURVEY
      const terrainGeo = new THREE.PlaneGeometry(36, 36, 32, 32);
      const posAttr = terrainGeo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        const zNoise = Math.sin(x * 0.2) * Math.cos(y * 0.2) * 2.5 + Math.sin(x * 0.5) * 0.8;
        posAttr.setZ(i, zNoise);
      }
      terrainGeo.computeVertexNormals();

      const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
      terrainMesh.rotation.x = -Math.PI / 2;
      stageGroup.add(terrainMesh);

      // Wireframe Overlay
      const wireMesh = new THREE.Mesh(terrainGeo, new THREE.MeshBasicMaterial({ color: '#66705A', wireframe: true, transparent: true, opacity: 0.3 }));
      wireMesh.rotation.x = -Math.PI / 2;
      wireMesh.position.y = 0.05;
      stageGroup.add(wireMesh);

      // Laser Scanner Beam Plane
      const scannerGeo = new THREE.BoxGeometry(36, 0.1, 0.2);
      const scannerMat = new THREE.MeshBasicMaterial({ color: '#B18A4A', transparent: true, opacity: 0.8 });
      const scannerMesh = new THREE.Mesh(scannerGeo, scannerMat);
      scannerMesh.position.set(0, 1.5, -18);
      stageGroup.add(scannerMesh);

      // Store in userData for animation
      stageGroup.userData.scanner = scannerMesh;
    } else if (stageIndex === 1) {
      // STAGE 02: CAD LASER GRID & TOPOGRAPHY SURVEY
      const gridHelper = new THREE.GridHelper(36, 36, '#B18A4A', '#38bdf8');
      gridHelper.position.y = 0.02;
      stageGroup.add(gridHelper);

      // Boundary Markers (4 Corners)
      const cornerGeo = new THREE.CylinderGeometry(0.3, 0.3, 4, 16);
      const corners = [
        [-15, -15], [15, -15], [15, 15], [-15, 15]
      ];
      corners.forEach(([cx, cz]) => {
        const pillar = new THREE.Mesh(cornerGeo, goldMat);
        pillar.position.set(cx, 2, cz);
        stageGroup.add(pillar);

        const beacon = new THREE.PointLight('#B18A4A', 2, 10);
        beacon.position.set(cx, 4, cz);
        stageGroup.add(beacon);
      });

      // CAD Boundary Laser Beam Line
      const points = [
        new THREE.Vector3(-15, 4, -15),
        new THREE.Vector3(15, 4, -15),
        new THREE.Vector3(15, 4, 15),
        new THREE.Vector3(-15, 4, 15),
        new THREE.Vector3(-15, 4, -15),
      ];
      const laserGeo = new THREE.BufferGeometry().setFromPoints(points);
      const laserMat = new THREE.LineBasicMaterial({ color: '#38bdf8', linewidth: 2 });
      const laserLine = new THREE.Line(laserGeo, laserMat);
      stageGroup.add(laserLine);
    } else if (stageIndex === 2) {
      // STAGE 03: MASTERPLAN & AVENUE ROAD NETWORK
      const groundGeo = new THREE.CylinderGeometry(18, 18, 0.6, 48);
      const groundMesh = new THREE.Mesh(groundGeo, terrainMat);
      groundMesh.position.y = -0.3;
      stageGroup.add(groundMesh);

      // Winding Road Tube
      const curvePoints = [
        new THREE.Vector3(-14, 0.1, 14),
        new THREE.Vector3(-6, 0.1, 4),
        new THREE.Vector3(4, 0.1, -4),
        new THREE.Vector3(12, 0.1, -12),
      ];
      const roadCurve = new THREE.CatmullRomCurve3(curvePoints);
      const roadTubeGeo = new THREE.TubeGeometry(roadCurve, 64, 1.2, 8, false);
      const roadTubeMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.5 });
      const roadMesh = new THREE.Mesh(roadTubeGeo, roadTubeMat);
      stageGroup.add(roadMesh);

      // Gold Road Centerline
      const lineTubeGeo = new THREE.TubeGeometry(roadCurve, 64, 0.1, 6, false);
      const lineMesh = new THREE.Mesh(lineTubeGeo, new THREE.MeshBasicMaterial({ color: '#B18A4A' }));
      stageGroup.add(lineMesh);

      // 3D Street Light Poles along Road
      for (let i = 0; i <= 64; i += 12) {
        const pt = roadCurve.getPoint(i / 64);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.8, 8), poleMat);
        pole.position.set(pt.x + 1.2, pt.y + 0.9, pt.z);
        stageGroup.add(pole);

        const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.3), lampMat);
        lamp.position.set(pt.x + 1.2, pt.y + 1.8, pt.z);
        stageGroup.add(lamp);

        const light = new THREE.PointLight('#f59e0b', 1.5, 8);
        light.position.set(pt.x + 1.2, pt.y + 1.7, pt.z);
        stageGroup.add(light);
      }
    } else if (stageIndex === 3) {
      // STAGE 04: ECO-GREEN SPINE & PARKS
      const groundGeo = new THREE.CylinderGeometry(18, 18, 0.6, 48);
      const groundMesh = new THREE.Mesh(groundGeo, terrainMat);
      groundMesh.position.y = -0.3;
      stageGroup.add(groundMesh);

      // Central Water Court / Pond
      const pondGeo = new THREE.CylinderGeometry(6, 6, 0.2, 32);
      const pondMesh = new THREE.Mesh(pondGeo, waterMat);
      pondMesh.position.y = 0.05;
      stageGroup.add(pondMesh);

      // 3D Trees Array around green spine
      const treeTopGeo = new THREE.IcosahedronGeometry(0.8, 1);
      const treeTrunkGeo = new THREE.CylinderGeometry(0.1, 0.15, 1.0);
      const trunkMat = new THREE.MeshStandardMaterial({ color: '#4a3728' });

      for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * Math.PI * 2;
        const radius = 8 + (i % 3) * 2.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        const treeGroup = new THREE.Group();
        treeGroup.position.set(x, 0.5, z);

        const trunk = new THREE.Mesh(treeTrunkGeo, trunkMat);
        treeGroup.add(trunk);

        const top = new THREE.Mesh(treeTopGeo, greenMat);
        top.position.y = 0.8;
        treeGroup.add(top);

        stageGroup.add(treeGroup);
      }
    } else if (stageIndex === 4) {
      // STAGE 05: SEISMIC VILLA FOUNDATIONS
      const gridGeo = new THREE.BoxGeometry(24, 0.4, 24);
      const gridMesh = new THREE.Mesh(gridGeo, terrainMat);
      gridMesh.position.y = -0.2;
      stageGroup.add(gridMesh);

      // Foundation Concrete Pads & Structural Columns
      const padGeo = new THREE.BoxGeometry(2.4, 0.4, 2.4);
      const padMat = new THREE.MeshStandardMaterial({ color: '#64748b', roughness: 0.5 });
      const columnGeo = new THREE.CylinderGeometry(0.12, 0.12, 2.5, 12);

      for (let rx = -8; rx <= 8; rx += 4) {
        for (let rz = -8; rz <= 8; rz += 4) {
          const pad = new THREE.Mesh(padGeo, padMat);
          pad.position.set(rx, 0.2, rz);
          stageGroup.add(pad);

          const col = new THREE.Mesh(columnGeo, goldMat);
          col.position.set(rx, 1.4, rz);
          stageGroup.add(col);
        }
      }
    } else if (stageIndex === 5) {
      // STAGE 06: SPLIT-LEVEL VILLA ARCHITECTURE
      const hillBase = new THREE.CylinderGeometry(18, 20, 4, 32);
      const hillMesh = new THREE.Mesh(hillBase, terrainMat);
      hillMesh.position.y = -2;
      stageGroup.add(hillMesh);

      // Split Level Villa Model
      const villaGroup = new THREE.Group();
      villaGroup.position.set(0, 1, 0);

      // Level 1 Ground Living
      const l1 = new THREE.Mesh(new THREE.BoxGeometry(6, 2, 4), villaMat);
      l1.position.set(-1, 0, 0);
      villaGroup.add(l1);

      // Level 2 Family Suite (Staggered)
      const l2 = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.8, 4), villaMat);
      l2.position.set(1, 1.8, 0.5);
      villaGroup.add(l2);

      // Cantilever Roof Deck
      const roof = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.3, 4.5), roofMat);
      roof.position.set(1, 2.85, 0.5);
      villaGroup.add(roof);

      // Wood Terrace Deck
      const deck = new THREE.Mesh(new THREE.BoxGeometry(4, 0.15, 3), goldMat);
      deck.position.set(-2, -0.9, 2.5);
      villaGroup.add(deck);

      stageGroup.add(villaGroup);
    } else if (stageIndex === 6) {
      // STAGE 07: 15,000 SQ.FT RESORT CLUBHOUSE
      const clubBase = new THREE.Mesh(new THREE.BoxGeometry(12, 2.4, 8), villaMat);
      clubBase.position.set(0, 1.2, 0);
      stageGroup.add(clubBase);

      const upperClub = new THREE.Mesh(new THREE.BoxGeometry(7, 1.5, 5), goldMat);
      upperClub.position.set(-1, 3.15, 0);
      stageGroup.add(upperClub);

      // Overhanging Infinity Lap Pool
      const pool = new THREE.Mesh(new THREE.BoxGeometry(10, 0.3, 4), waterMat);
      pool.position.set(0, 0.15, 5.5);
      stageGroup.add(pool);
    } else {
      // STAGE 08: COMPLETE ANTELIA GROVES MASTER ESTATE
      const terraceHeights = [0, 1.2, 2.6, 4.2];
      const terraceRadii = [18, 14, 10, 6];

      terraceRadii.forEach((radius, idx) => {
        const h = terraceHeights[idx];
        const tGeo = new THREE.CylinderGeometry(radius, radius + 1, 1.2, 32);
        const tMesh = new THREE.Mesh(tGeo, terrainMat);
        tMesh.position.y = h - 0.6;
        stageGroup.add(tMesh);

        // Stone Retaining Wall
        const wMesh = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.15, 8, 32), stoneWallMat);
        wMesh.rotation.x = Math.PI / 2;
        wMesh.position.y = h;
        stageGroup.add(wMesh);
      });

      // Cluster of 189 Stepped Villas
      for (let r = 0; r < 4; r++) {
        const radius = terraceRadii[r];
        const count = 12 - r * 2;
        const h = terraceHeights[r];

        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2;
          const x = Math.cos(angle) * (radius - 1.2);
          const z = Math.sin(angle) * (radius - 1.2);

          const villa = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 1.2), villaMat);
          villa.position.set(x, h + 0.4, z);
          villa.rotation.y = -angle;
          stageGroup.add(villa);

          const cap = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.2, 1.25), roofMat);
          cap.position.set(x, h + 0.9, z);
          cap.rotation.y = -angle;
          stageGroup.add(cap);
        }
      }

      // Hilltop Apex Clubhouse
      const club = new THREE.Mesh(new THREE.BoxGeometry(3.5, 1.2, 2.5), goldMat);
      club.position.set(0, 4.8, 0);
      stageGroup.add(club);
    }

    // 5. Orbit & Mouse Animation Loop
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
      mouseX = x * 0.3;
      mouseY = y * 0.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Continuous Majestic 360° 3D Orbit Rotation
      stageGroup.rotation.y += 0.008;

      // Scanning Beam animation for Stage 01
      if (stageIndex === 0 && stageGroup.userData.scanner) {
        const scanner = stageGroup.userData.scanner;
        scanner.position.z += 0.2;
        if (scanner.position.z > 18) scanner.position.z = -18;
      }

      // Parallax Tilt
      targetRotationY += (mouseX - targetRotationY) * 0.05;
      camera.position.x = Math.sin(targetRotationY + stageGroup.rotation.y * 0.5) * 30;
      camera.position.z = Math.cos(targetRotationY + stageGroup.rotation.y * 0.5) * 30;
      camera.lookAt(0, 1.5, 0);

      renderer.render(scene, camera);
    };

    animate();

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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [stageIndex]);

  return (
    <div className="relative w-full h-full min-h-[300px] bg-[#0b1320] rounded-xl overflow-hidden shadow-2xl border border-[#D5D0C6]">
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-3 right-3 z-10 bg-[#111722]/80 backdrop-blur-md px-3 py-1 rounded-xs border border-[#B18A4A]/40 text-[9px] font-mono text-[#B18A4A] font-bold uppercase tracking-widest pointer-events-none">
        3D WEBGL INTERACTIVE MODEL • STAGE 0{stageIndex + 1}
      </div>
    </div>
  );
}
