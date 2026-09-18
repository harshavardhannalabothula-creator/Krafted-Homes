'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Volume2, VolumeX, ArrowDown, Sparkles, Layers, Shield, Home, Play, Pause } from 'lucide-react';
import * as THREE from 'three';

interface ConstructionHeroMotionProps {
  onOpenBooking: () => void;
}

export default function ConstructionHeroMotion({ onOpenBooking }: ConstructionHeroMotionProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [soundOn, setSoundOn] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('00 THE LAND');

  const navItems = [
    '00 THE LAND',
    'SURVEY',
    'MASTERPLAN',
    'VILLAS',
    'CLUBHOUSE',
    'LANDSCAPE',
    'MINDFULNESS',
  ];

  // Initialize Three.js 3D Colony Rotating Scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#070d18');
    scene.fog = new THREE.FogExp2('#070d18', 0.012);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 32, 44);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 2. Balanced Luxury Architectural Lighting (No White Glare)
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#fff5e6', 1.2);
    sunLight.position.set(25, 40, 20);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const fillLight = new THREE.PointLight('#c5a059', 0.8, 60);
    fillLight.position.set(-20, 15, -20);
    scene.add(fillLight);

    // 3. Colony Masterplan Group (Holds Terraced Hill Topography, 189 Villas, Hilltop Clubhouse, Winding Hill Roads)
    const colonyGroup = new THREE.Group();
    scene.add(colonyGroup);

    // 4. Create 3D Terraced Hilltop Contours (4 Stepped Hill Slope Levels)
    const hillTerracesGroup = new THREE.Group();
    colonyGroup.add(hillTerracesGroup);

    const hillMat = new THREE.MeshStandardMaterial({ color: '#162235', roughness: 0.8, metalness: 0.1 });
    const retainingWallMat = new THREE.MeshStandardMaterial({ color: '#4b5563', roughness: 0.6, metalness: 0.2 });
    const roadMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.5 });
    const roadLineMat = new THREE.MeshBasicMaterial({ color: '#c5a059' });

    // 4 Stepped Hill Terraces Ascending the Slope
    const terraceHeights = [0, 1.2, 2.6, 4.2];
    const terraceRadii = [34, 26, 18, 10];

    terraceRadii.forEach((radius, idx) => {
      const h = terraceHeights[idx];
      
      // Hill terrace base platform
      const terraceGeo = new THREE.CylinderGeometry(radius, radius + 1.5, 1.2, 48);
      const terraceMesh = new THREE.Mesh(terraceGeo, hillMat);
      terraceMesh.position.y = h - 0.6;
      terraceMesh.receiveShadow = true;
      hillTerracesGroup.add(terraceMesh);

      // Stone Retaining Wall on terrace perimeter edge
      const wallGeo = new THREE.TorusGeometry(radius, 0.25, 8, 48);
      const wallMesh = new THREE.Mesh(wallGeo, retainingWallMat);
      wallMesh.rotation.x = Math.PI / 2;
      wallMesh.position.y = h;
      wallMesh.receiveShadow = true;
      hillTerracesGroup.add(wallMesh);
    });

    // Outer Estate Boundary Ring on Hill Topography
    const ringGeo = new THREE.RingGeometry(35.5, 36.0, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: '#c5a059', side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0.02;
    colonyGroup.add(ringMesh);

    // 5. Winding Serpentine Hill Access Roads ("Proper Ways") & 3D Street Lights
    const hillRoadGroup = new THREE.Group();
    colonyGroup.add(hillRoadGroup);

    // Create Spiral Winding Road Snaking Up the Hill Slope
    const roadPoints: THREE.Vector3[] = [];
    const numRoadSteps = 120;
    for (let i = 0; i <= numRoadSteps; i++) {
      const progress = i / numRoadSteps;
      const angle = progress * Math.PI * 4; // 2 complete loops around hill
      const radius = 31 - progress * 20;    // 31 down at base, 11 up at hilltop
      const y = progress * 4.4 + 0.1;       // Ascending from y=0 to y=4.4
      roadPoints.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
    }

    const roadCurve = new THREE.CatmullRomCurve3(roadPoints);
    const roadTubeGeo = new THREE.TubeGeometry(roadCurve, 100, 1.2, 8, false);
    const roadTubeMesh = new THREE.Mesh(roadTubeGeo, roadMat);
    roadTubeMesh.receiveShadow = true;
    hillRoadGroup.add(roadTubeMesh);

    // Glowing Gold Center-Line Marker along Winding Hill Road
    const roadLineGeo = new THREE.TubeGeometry(roadCurve, 100, 0.12, 6, false);
    const roadLineMesh = new THREE.Mesh(roadLineGeo, roadLineMat);
    hillRoadGroup.add(roadLineMesh);

    // 3D Street Light Poles along Winding Hill Access Road Curves
    const streetLightGroup = new THREE.Group();
    colonyGroup.add(streetLightGroup);

    const poleGeo = new THREE.CylinderGeometry(0.06, 0.08, 1.6, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: '#0f172a', metalness: 0.8 });
    const lampHeadMat = new THREE.MeshBasicMaterial({ color: '#fef08a' });

    for (let i = 5; i < numRoadSteps; i += 12) {
      const pt = roadPoints[i];
      const tangent = roadCurve.getTangentAt(i / numRoadSteps);
      const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();

      const polePos = pt.clone().add(normal.multiplyScalar(1.5));

      const pMesh = new THREE.Mesh(poleGeo, poleMat);
      pMesh.position.set(polePos.x, polePos.y + 0.8, polePos.z);
      streetLightGroup.add(pMesh);

      const lampHead = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.25, 0.35), lampHeadMat);
      lampHead.position.set(polePos.x, polePos.y + 1.6, polePos.z);
      streetLightGroup.add(lampHead);

      const pLight = new THREE.PointLight('#f59e0b', 2.0, 10);
      pLight.position.set(polePos.x, polePos.y + 1.5, polePos.z);
      streetLightGroup.add(pLight);
    }

    // 6. Materials & Geometries for Hillside Colony Villas
    const villaBaseMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.4, metalness: 0.1 });
    const villaRoofMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.3 });
    const woodDeckMat = new THREE.MeshStandardMaterial({ color: '#9a3412', roughness: 0.5 });
    const clubhouseMat = new THREE.MeshStandardMaterial({ color: '#c5a059', roughness: 0.2, metalness: 0.3 });
    const poolMat = new THREE.MeshStandardMaterial({ color: '#0284c7', roughness: 0.1, metalness: 0.8 });
    const treeMat = new THREE.MeshStandardMaterial({ color: '#15803d', roughness: 0.7 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#4a3728', roughness: 0.9 });

    const villaBoxGeo = new THREE.BoxGeometry(1.2, 0.9, 1.4);
    const villaRoofGeo = new THREE.BoxGeometry(1.25, 0.25, 1.45);
    const cantileverDeckGeo = new THREE.BoxGeometry(1.3, 0.1, 0.8);
    const treeTopGeo = new THREE.IcosahedronGeometry(0.5, 1);
    const treeTrunkGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.6);

    // 7. Generate 189 Split-Level Hillside Villas Staggered Across 4 Elevation Terraces
    const villaCount = 189;
    const terraceRings = [
      { radius: 29, count: 56, h: 0.1 },   // Terrace Level 1 (Valley Level)
      { radius: 22, count: 48, h: 1.3 },   // Terrace Level 2 (Lower Slope)
      { radius: 15, count: 44, h: 2.7 },   // Terrace Level 3 (Upper Slope)
      { radius: 8,  count: 41, h: 4.3 },   // Terrace Level 4 (Hilltop Level)
    ];

    let createdVillas = 0;
    terraceRings.forEach((ring) => {
      for (let i = 0; i < ring.count; i++) {
        if (createdVillas >= villaCount) break;

        const angle = (i / ring.count) * Math.PI * 2;
        
        // Reserve corridor space for main hill entrance road
        if (Math.abs(angle - Math.PI / 2) < 0.2) continue;

        const x = Math.cos(angle) * ring.radius;
        const z = Math.sin(angle) * ring.radius;

        const villaSingle = new THREE.Group();
        villaSingle.position.set(x, ring.h + 0.45, z);
        villaSingle.rotation.y = -angle + Math.PI / 2;

        // Ground Structure
        const bodyMesh = new THREE.Mesh(villaBoxGeo, villaBaseMat);
        bodyMesh.castShadow = true;
        bodyMesh.receiveShadow = true;
        villaSingle.add(bodyMesh);

        // Gold Roof Canopy
        const roofMesh = new THREE.Mesh(villaRoofGeo, villaRoofMat);
        roofMesh.position.y = 0.55;
        roofMesh.castShadow = true;
        villaSingle.add(roofMesh);

        // Cantilever Deck Overlooking Hillside Slope
        const deckMesh = new THREE.Mesh(cantileverDeckGeo, woodDeckMat);
        deckMesh.position.set(0, -0.2, 0.9);
        deckMesh.castShadow = true;
        villaSingle.add(deckMesh);

        colonyGroup.add(villaSingle);
        createdVillas++;

        // Add terraced pine trees next to every villa
        if (i % 2 === 0) {
          const treeGroup = new THREE.Group();
          const treeX = Math.cos(angle + 0.07) * (ring.radius + 1.4);
          const treeZ = Math.sin(angle + 0.07) * (ring.radius + 1.4);
          treeGroup.position.set(treeX, ring.h + 0.3, treeZ);

          const trunk = new THREE.Mesh(treeTrunkGeo, trunkMat);
          treeGroup.add(trunk);

          const top = new THREE.Mesh(treeTopGeo, treeMat);
          top.position.y = 0.5;
          treeGroup.add(top);

          colonyGroup.add(treeGroup);
        }
      }
    });

    // 8. Hilltop Apex 15,000 Sq.Ft Clubhouse & Overlooking Infinity Pool
    const clubhouseGroup = new THREE.Group();
    clubhouseGroup.position.set(0, 4.85, 0); // Positioned at Hilltop Summit

    const mainClubMesh = new THREE.Mesh(new THREE.BoxGeometry(4.8, 1.6, 3.2), clubhouseMat);
    mainClubMesh.castShadow = true;
    clubhouseGroup.add(mainClubMesh);

    const upperClubMesh = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.9, 2.2), villaBaseMat);
    upperClubMesh.position.set(0, 1.25, 0);
    clubhouseGroup.add(upperClubMesh);

    // Overhanging Hilltop Infinity Plunge Pool
    const poolMesh = new THREE.Mesh(new THREE.BoxGeometry(6, 0.15, 3.8), poolMat);
    poolMesh.position.set(0, -0.75, 3.4);
    clubhouseGroup.add(poolMesh);

    colonyGroup.add(clubhouseGroup);

    // 9. Interactive Mouse Motion & Orbit Animation Loop
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
      mouseX = x * 0.15;
      mouseY = y * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Continuous Slow Majestic 3D Hill Colony Rotation
      colonyGroup.rotation.y += 0.0005;

      // Mouse Tilt Parallax
      targetRotationY += (mouseX - targetRotationY) * 0.05;
      targetRotationX += (mouseY - targetRotationX) * 0.05;

      camera.position.x = Math.sin(targetRotationY) * 44;
      camera.position.z = Math.cos(targetRotationY) * 44;
      camera.position.y = 32 + targetRotationX * 10;
      camera.lookAt(0, 2.5, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const scrollToLand = () => {
    const el = document.getElementById('land');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full bg-[#0b0f12] text-white overflow-hidden flex flex-col justify-between select-none">
      
      {/* 3D WebGL Rotating Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing" />

      {/* Radial Dark Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0b0f12_95%)] pointer-events-none z-10" />

      {/* Top Telemetry Header Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          
          {/* Telemetry Sensor Specs */}
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-gray-400 tracking-widest">
            <span className="text-[#F97316] font-bold">AERIAL SENSOR: 12.8946° N 77.5946° E</span>
            <span>|</span>
            <span>ELEVATION: 924M AMSL</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">SCALE: 1:500 ARCHITECTURAL</span>
          </div>

          {/* Top Story Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-3 py-1 rounded-xs text-[10px] font-mono uppercase tracking-widest transition-all ${
                  activeTab === item
                    ? 'bg-[#F4F0E7] text-[#0F172A] font-bold shadow-sm'
                    : 'text-gray-400 hover:text-white border border-transparent hover:border-white/20'
                }`}
              >
                {item}
              </button>
            ))}

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundOn(!soundOn)}
              className="px-3 py-1 rounded-xs text-[10px] font-mono uppercase tracking-widest text-gray-300 border border-white/20 hover:border-white flex items-center gap-1.5 shrink-0"
            >
              {soundOn ? <Volume2 className="w-3 h-3 text-[#F97316]" /> : <VolumeX className="w-3 h-3 text-gray-400" />}
              <span>{soundOn ? 'SOUND ON' : 'SOUND OFF'}</span>
            </button>

            {/* Inquire CTA */}
            <button
              onClick={onOpenBooking}
              className="px-4 py-1.5 rounded-xs text-[10px] font-mono font-bold uppercase tracking-widest text-[#0F172A] bg-[#F97316] hover:bg-[#F4F0E7] transition-all shrink-0"
            >
              INQUIRE ↗
            </button>
          </div>

        </div>
      </div>

      {/* Center Grand Title & Monograph Card */}
      <div className="relative z-20 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center my-auto py-4">
        
        {/* Monograph Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-gray-300 font-bold">
            ARCHITECTURAL MONOGRAPH &amp; MASTER DEVELOPMENT
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tight leading-none mb-3 drop-shadow-2xl">
          ANTELIA GROVES
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#F97316] uppercase font-bold mb-8">
          10 ACRES. ONE VISION. A LIVING LANDSCAPE.
        </p>

        {/* Monograph Overlay Card */}
        <div className="bg-black/75 backdrop-blur-xl p-6 sm:p-8 rounded-xl border border-white/15 shadow-2xl max-w-2xl mx-auto text-center">
          <p className="text-lg sm:text-2xl font-serif italic text-white mb-2 font-light">
            &ldquo;It started with 10 acres of land.&rdquo;
          </p>
          <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">
            AND A VISION TO TRANSFORM IT INTO SOMETHING EXTRAORDINARY.
          </p>

          {/* Stats Bar */}
          <div className="flex items-center justify-around border-t border-white/10 pt-4 font-mono text-xs sm:text-sm">
            <div>
              <span className="text-white font-bold text-base sm:text-lg block">10.0</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">ACRES</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="text-white font-bold text-base sm:text-lg block">189</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">VILLAS</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="text-white font-bold text-base sm:text-lg block">15K+ SQ.FT</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">CLUBHOUSE</span>
            </div>
          </div>
        </div>

        {/* Enter Master Development Button */}
        <div className="mt-8">
          <button
            onClick={scrollToLand}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0F172A]/90 hover:bg-[#F97316] hover:text-[#0F172A] text-xs font-mono font-bold uppercase tracking-[0.25em] text-white border border-white/20 hover:border-[#F97316] transition-all shadow-xl backdrop-blur-md group"
          >
            <span>ENTER THE MASTER DEVELOPMENT</span>
            <ArrowDown className="w-4 h-4 text-[#F97316] group-hover:text-[#0F172A] transition-colors animate-bounce" />
          </button>
        </div>

      </div>

      {/* Bottom Telemetry Footer */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/10 pt-3 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          <div>
            <span>ORIENTATION: 12° NORTH-BY-EAST</span>
          </div>
          <div>
            <span>SEQUENCE: RAW LAND &rarr; VISION &rarr; ANTELIA GROVES</span>
          </div>
        </div>
      </div>

    </section>
  );
}
