'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Clubhouse3DEngineProps {
  activeHotspot: number;
}

export default function Clubhouse3DEngine({ activeHotspot }: Clubhouse3DEngineProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#070d18');

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(20, 16, 26);
    camera.lookAt(0, 3, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setClearColor('#070d18', 1);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
    } catch (e) {
      console.error("WebGL Renderer Error in Clubhouse3DEngine:", e);
      return;
    }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight('#fff5e6', 1.4);
    mainLight.position.set(20, 30, 15);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const poolLight = new THREE.PointLight('#38bdf8', 2.5, 30);
    poolLight.position.set(0, 2, 8);
    scene.add(poolLight);

    // Main Clubhouse Group
    const clubGroup = new THREE.Group();
    scene.add(clubGroup);

    // Materials
    const baseMat = new THREE.MeshStandardMaterial({ color: '#F4F0E7', roughness: 0.3 });
    const accentMat = new THREE.MeshStandardMaterial({ color: '#F97316', roughness: 0.3, metalness: 0.4 });
    const poolMat = new THREE.MeshStandardMaterial({ color: '#0284c7', roughness: 0.1, metalness: 0.8 });
    const woodMat = new THREE.MeshStandardMaterial({ color: '#9a3412', roughness: 0.6 });
    const glassMat = new THREE.MeshPhysicalMaterial({ color: '#38bdf8', transparent: true, opacity: 0.3, transmission: 0.7 });

    // Ground Platform
    const groundMesh = new THREE.Mesh(new THREE.CylinderGeometry(18, 19, 0.6, 48), new THREE.MeshStandardMaterial({ color: '#162235', roughness: 0.8 }));
    groundMesh.position.y = -0.3;
    clubGroup.add(groundMesh);

    // Main 15,000 Sq.Ft Clubhouse Structure
    const mainBuilding = new THREE.Mesh(new THREE.BoxGeometry(14, 4, 9), baseMat);
    mainBuilding.position.set(0, 2, -2);
    mainBuilding.castShadow = true;
    clubGroup.add(mainBuilding);

    // Glass Frontage Facade
    const glassFacade = new THREE.Mesh(new THREE.BoxGeometry(13.6, 3.6, 0.1), glassMat);
    glassFacade.position.set(0, 2, 2.55);
    clubGroup.add(glassFacade);

    // Upper VIP Sky Lounge Roof Deck
    const upperRoof = new THREE.Mesh(new THREE.BoxGeometry(8, 2, 6), accentMat);
    upperRoof.position.set(-1, 5, -2);
    upperRoof.castShadow = true;
    clubGroup.add(upperRoof);

    // Overhanging Infinity Plunge Pool
    const poolMesh = new THREE.Mesh(new THREE.BoxGeometry(12, 0.3, 5), poolMat);
    poolMesh.position.set(0, 0.15, 6);
    clubGroup.add(poolMesh);

    // Wooden Poolside Deck
    const poolDeck = new THREE.Mesh(new THREE.BoxGeometry(14, 0.2, 3), woodMat);
    poolDeck.position.set(0, 0.1, 2);
    clubGroup.add(poolDeck);

    // Outdoor Amphitheatre & Sports Court Deck
    const courtMesh = new THREE.Mesh(new THREE.BoxGeometry(8, 0.1, 6), new THREE.MeshStandardMaterial({ color: '#66705A', roughness: 0.6 }));
    courtMesh.position.set(10, 0.05, 0);
    clubGroup.add(courtMesh);

    // Hotspot Focus Indicators
    const hotspotPositions = [
      new THREE.Vector3(5, 2, -2),   // Sports & Fitness Wing
      new THREE.Vector3(-4, 2, -2),  // Banquet Hall
      new THREE.Vector3(-1, 5, -2),  // Library & Hobby Nook
      new THREE.Vector3(0, 0.2, 3),  // Cafe & Al-Fresco Terrace
      new THREE.Vector3(0, 0.2, 6),  // Resort Pool & Kids Zone
    ];

    const targetPos = hotspotPositions[activeHotspot] || hotspotPositions[0];

    const marker = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshBasicMaterial({ color: '#F97316' }));
    marker.position.copy(targetPos);
    marker.position.y += 1.5;
    clubGroup.add(marker);

    const markerLight = new THREE.PointLight('#F97316', 3, 15);
    markerLight.position.copy(marker.position);
    clubGroup.add(markerLight);

    // Animation Loop
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

      clubGroup.rotation.y += 0.0025;

      // Pulse marker height
      marker.position.y = targetPos.y + 1.5 + Math.sin(Date.now() * 0.005) * 0.2;

      targetRotationY += (mouseX - targetRotationY) * 0.05;
      camera.position.x = Math.sin(targetRotationY) * 26;
      camera.position.z = Math.cos(targetRotationY) * 26;
      camera.lookAt(0, 2.5, 0);

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
  }, [activeHotspot]);

  return (
    <div className="relative w-full h-full min-h-[380px] bg-[#070d18] rounded-xl overflow-hidden shadow-2xl border border-[slate-200]">
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-3 right-3 z-10 bg-[#0F172A]/80 backdrop-blur-md px-3 py-1 rounded-xs border border-[#F97316]/40 text-[9px] font-mono text-[#F97316] font-bold uppercase tracking-widest pointer-events-none">
        3D RESORT CLUBHOUSE ENGINE • HOTSPOT #{activeHotspot + 1}
      </div>
    </div>
  );
}
