'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Layers, Trees, Shield, Home, Sun, Moon, Sparkles, MapPin, Activity, CheckCircle2, Box, Image as ImageIcon } from 'lucide-react';
import Journey3DEngine from './Journey3DEngine';

interface StageVisualizerProps {
  stageIndex: number;
  imageSrc: string;
  blueprintStep?: number;
}

export default function StageVisualizer({ stageIndex, imageSrc, blueprintStep = 0 }: StageVisualizerProps) {
  const [viewMode, setViewMode] = useState<'3D' | 'HD'>('3D');
  // STAGE 03 (Index 2): DYNAMIC HIGH-TECH CAD ARCHITECTURAL BLUEPRINT CANVAS
  if (stageIndex === 2) {
    return (
      <div className="relative w-full h-full bg-[#070F26] text-white flex flex-col justify-between p-4 font-mono overflow-hidden select-none border border-cyan-500/30">
        {/* CAD Blueprint Graph Paper Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00f2fe 1px, transparent 1px),
              linear-gradient(to bottom, #00f2fe 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Top CAD Telemetry Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/30 pb-2 text-[10px] text-cyan-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bold tracking-widest uppercase">AUTOCAD 2026 • 10-ACRE MASTERPLAN CAD BLUEPRINT</span>
          </div>
          <span className="text-cyan-400/80 font-mono">SCALE 1:500 • DWG #AG-189</span>
        </div>

        {/* Vector CAD Masterplan Drawing */}
        <div className="relative z-10 my-auto w-full h-[240px] sm:h-[320px] flex items-center justify-center">
          <svg className="w-full h-full max-w-lg" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer 10-Acre Perimeter Boundary */}
            <polygon
              points="40,30 460,20 450,290 30,280"
              fill="#0F2847"
              fillOpacity="0.4"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeDasharray="4 2"
            />

            {/* Perimeter Dimension Annotations */}
            <text x="250" y="16" fill="#38BDF8" fontSize="9" textAnchor="middle">420.5 METERS (NORTH BOUNDARY)</text>
            <text x="250" y="308" fill="#38BDF8" fontSize="9" textAnchor="middle">418.0 METERS (SOUTH BOUNDARY)</text>
            <text x="14" y="160" fill="#38BDF8" fontSize="9" textAnchor="middle" transform="rotate(-90 14 160)">980 METERS WEST</text>
            <text x="484" y="160" fill="#38BDF8" fontSize="9" textAnchor="middle" transform="rotate(90 484 160)">975 METERS EAST</text>

            {/* Arterial 40ft Loop Boulevard */}
            <path
              d="M 60 270 C 120 180, 200 120, 430 40"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeDasharray="6 3"
            />
            <text x="240" y="130" fill="#F59E0B" fontSize="8" fontWeight="bold" transform="rotate(-25 240 130)">
              40FT ARTERIAL MAIN BOULEVARD
            </text>

            {/* 189 Villa Plot Rectangles (Sectors A, B, C, D) */}
            {/* Sector A */}
            <g stroke="#38BDF8" strokeWidth="1" fill="#0369A1" fillOpacity="0.2">
              <rect x="70" y="50" width="30" height="20" rx="1" />
              <text x="85" y="63" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-01</text>
              <rect x="105" y="50" width="30" height="20" rx="1" />
              <text x="120" y="63" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-02</text>
              <rect x="140" y="50" width="30" height="20" rx="1" />
              <text x="155" y="63" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-03</text>
              <rect x="175" y="50" width="30" height="20" rx="1" />
              <text x="190" y="63" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-04</text>
            </g>

            {/* Sector B */}
            <g stroke="#38BDF8" strokeWidth="1" fill="#0369A1" fillOpacity="0.2">
              <rect x="70" y="80" width="30" height="20" rx="1" />
              <text x="85" y="93" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-05</text>
              <rect x="105" y="80" width="30" height="20" rx="1" />
              <text x="120" y="93" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-06</text>
              <rect x="140" y="80" width="30" height="20" rx="1" />
              <text x="155" y="93" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-07</text>
              <rect x="175" y="80" width="30" height="20" rx="1" />
              <text x="190" y="93" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-08</text>
            </g>

            {/* Sector C (Mid Cluster) */}
            <g stroke="#38BDF8" strokeWidth="1" fill="#0369A1" fillOpacity="0.2">
              <rect x="70" y="160" width="30" height="20" rx="1" />
              <text x="85" y="173" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-42</text>
              <rect x="105" y="160" width="30" height="20" rx="1" />
              <text x="120" y="173" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-43</text>
              <rect x="140" y="160" width="30" height="20" rx="1" />
              <text x="155" y="173" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-44</text>
              <rect x="175" y="160" width="30" height="20" rx="1" />
              <text x="190" y="173" fill="#BAE6FD" fontSize="7" textAnchor="middle">P-45</text>
            </g>

            {/* Central 2-Acre Green Park Spine */}
            <rect x="230" y="60" width="180" height="80" rx="6" fill="#059669" fillOpacity="0.3" stroke="#34D399" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="320" y="95" fill="#6EE7B7" fontSize="10" fontWeight="bold" textAnchor="middle">40% OPEN GREEN SPINE & PARKS</text>
            <text x="320" y="112" fill="#A7F3D0" fontSize="8" textAnchor="middle">Butterfly Meadow • Walking Loop</text>

            {/* Central 15,000 SQ.FT Clubhouse Precinct */}
            <rect x="260" y="170" width="150" height="90" rx="4" fill="#B45309" fillOpacity="0.4" stroke="#FBBF24" strokeWidth="2" />
            <text x="335" y="200" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">15,000 SQ.FT CLUBHOUSE</text>
            <text x="335" y="218" fill="#FEF3C7" fontSize="8" textAnchor="middle">Resort Pool • Banquet • Sports Wing</text>

            {/* Lap Pool Icon inside Clubhouse */}
            <rect x="280" y="230" width="110" height="20" rx="2" fill="#0284C7" fillOpacity="0.6" stroke="#38BDF8" strokeWidth="1" />
            <text x="335" y="243" fill="#E0F2FE" fontSize="8" textAnchor="middle">HALF-OLYMPIC LAP POOL</text>

            {/* Vastu Compass Rosette (Top Right) */}
            <g transform="translate(425, 65)">
              <circle cx="0" cy="0" r="22" fill="#070F26" stroke="#F59E0B" strokeWidth="1.5" />
              <line x1="0" y1="-20" x2="0" y2="20" stroke="#F59E0B" strokeWidth="1.5" />
              <line x1="-20" y1="0" x2="20" y2="0" stroke="#F59E0B" strokeWidth="1.5" />
              <polygon points="0,-22 -4,-12 4,-12" fill="#F59E0B" />
              <text x="0" y="-8" fill="#F59E0B" fontSize="8" fontWeight="bold" textAnchor="middle">N</text>
              <text x="0" y="16" fill="#9CA3AF" fontSize="6" textAnchor="middle">S</text>
              <text x="13" y="3" fill="#9CA3AF" fontSize="6" textAnchor="middle">E</text>
              <text x="-13" y="3" fill="#9CA3AF" fontSize="6" textAnchor="middle">W</text>
              <text x="0" y="29" fill="#F59E0B" fontSize="6" textAnchor="middle">VASTU</text>
            </g>
          </svg>
        </div>

        {/* CAD Blueprint Title Stamp Block (Bottom Right) */}
        <div className="relative z-10 border border-cyan-500/40 bg-[#0C1E3A] p-2.5 rounded-xs flex items-center justify-between text-[9px] text-cyan-200">
          <div>
            <span className="font-bold text-white block">KRAFTED HOMES ARCHITECTURAL STUDIO</span>
            <span>PROJECT: ANTELIA GROVES (10-ACRE GATED ESTATE)</span>
          </div>
          <div className="text-right border-l border-cyan-500/30 pl-3">
            <span className="text-amber-400 font-bold block">STATUS: APPROVED CAD BLUEPRINT</span>
            <span>189 PLOTS • 15K CLUBHOUSE</span>
          </div>
        </div>
      </div>
    );
  }

  // STAGE 06 (Index 5): ARCHITECTURAL SPLIT-LEVEL VERTICAL CROSS-SECTION CUT
  if (stageIndex === 5) {
    return (
      <div className="relative w-full h-full bg-[#0F172A] text-white flex flex-col justify-between p-4 font-mono overflow-hidden select-none border border-orange-500/30">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #f59e0b 1px, transparent 1px),
              linear-gradient(to bottom, #f59e0b 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Header Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-orange-500/30 pb-2 text-[10px] text-amber-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-bold tracking-widest uppercase">VERTICAL SPLIT-LEVEL SECTION CUT ARCHITECTURE</span>
          </div>
          <span className="text-gray-400 font-mono">DRAWING #AG-SPLIT-3D</span>
        </div>

        {/* Vector Architectural Cross-Section Cut */}
        <div className="relative z-10 my-auto w-full h-[240px] sm:h-[320px] flex items-center justify-center">
          <svg className="w-full h-full max-w-md" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ground Level Line & Soil Hatch */}
            <line x1="10" y1="260" x2="390" y2="260" stroke="#64748B" strokeWidth="2" />
            <rect x="10" y="260" width="380" height="30" fill="#334155" fillOpacity="0.4" />
            <text x="35" y="280" fill="#94A3B8" fontSize="8">NATURAL TERRAIN GRADE (±0.00m)</text>

            {/* LEVEL 01: Ground Living & Backyard Garden Deck */}
            <rect x="40" y="160" width="220" height="100" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
            <text x="50" y="180" fill="#F59E0B" fontSize="10" fontWeight="bold">LEVEL 01: GROUND LIVING</text>
            <text x="50" y="196" fill="#CBD5E1" fontSize="8">18-FT Ceiling Double Height</text>
            <text x="50" y="210" fill="#CBD5E1" fontSize="8">Open Kitchen Island & Dining</text>

            {/* 180 Sq.Ft Private Backyard Deck (Right of Level 1) */}
            <rect x="260" y="210" width="100" height="50" fill="#065F46" fillOpacity="0.4" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="310" y="234" fill="#6EE7B7" fontSize="8" fontWeight="bold" textAnchor="middle">180 SQ.FT PRIVATE</text>
            <text x="310" y="246" fill="#A7F3D0" fontSize="7" textAnchor="middle">GREEN BACKYARD</text>

            {/* LEVEL 02: Staggered Mid-Level Family Bedrooms */}
            <rect x="120" y="90" width="200" height="80" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
            <text x="130" y="112" fill="#38BDF8" fontSize="10" fontWeight="bold">LEVEL 02: FAMILY SUITES</text>
            <text x="130" y="128" fill="#CBD5E1" fontSize="8">2 Private Bedroom Suites</text>
            <text x="130" y="142" fill="#CBD5E1" fontSize="8">Acoustic Isolation (-45dB)</text>

            {/* LEVEL 03: Rooftop Sky Terrace & Master Suite */}
            <rect x="180" y="20" width="180" height="70" fill="#1E293B" stroke="#A855F7" strokeWidth="2" />
            <text x="190" y="42" fill="#C084FC" fontSize="10" fontWeight="bold">LEVEL 03: SKY TERRACE</text>
            <text x="190" y="56" fill="#CBD5E1" fontSize="8">Master Suite + Pergola Lounge</text>
            <text x="190" y="70" fill="#CBD5E1" fontSize="8">Open Sky Cinema & Fire Pit</text>

            {/* Solar Trajectory Daylight Rays Arrow */}
            <path d="M 370 10 L 150 170" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="150,170 162,162 160,174" fill="#FBBF24" />
            <text x="310" y="80" fill="#FBBF24" fontSize="8" fontWeight="bold" transform="rotate(-35 310 80)">
              SUNLIGHT PASSES THROUGH VOID
            </text>

            {/* Vertical Dimension Lines */}
            <line x1="30" y1="160" x2="30" y2="260" stroke="#F59E0B" strokeWidth="1" />
            <text x="24" y="215" fill="#F59E0B" fontSize="8" textAnchor="middle" transform="rotate(-90 24 215)">3.6M VOL</text>

            <line x1="110" y1="90" x2="110" y2="170" stroke="#38BDF8" strokeWidth="1" />
            <text x="104" y="130" fill="#38BDF8" fontSize="8" textAnchor="middle" transform="rotate(-90 104 130)">3.2M SUITE</text>
          </svg>
        </div>

        {/* Footer Tag */}
        <div className="relative z-10 border border-orange-500/30 bg-[#1E293B] p-2 rounded-xs flex items-center justify-between text-[9px] text-amber-300">
          <span className="font-bold">SIGNATURE SPLIT-LEVEL VERTICAL SPATIAL ARCHITECTURE</span>
          <span className="text-gray-400">3 FLOATING LEVELS • ZERO STAIR FATIGUE</span>
        </div>
      </div>
    );
  }

  // DEFAULT / OTHER STAGES: DYNAMIC 3D WEBGL ENGINE WITH OPTIONAL HD ARCHITECTURAL PHOTO VIEW
  return (
    <div className="relative w-full h-full bg-[#0b1320] overflow-hidden group rounded-xl border border-[slate-200]">
      {viewMode === '3D' ? (
        <Journey3DEngine stageIndex={stageIndex} />
      ) : (
        <div className="relative w-full h-full">
          {/* Pristine HD Image Background */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${imageSrc}')` }}
          />

          {/* Gradient Vignette Overlay for High Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Stage Specific CAD Graphics Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            {stageIndex === 0 && (
              <svg className="w-full h-full stroke-emerald-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0 30 Q 30 10 60 40 T 100 20" fill="none" strokeWidth="0.6" strokeDasharray="2 1" />
                <path d="M 0 60 Q 40 40 70 70 T 100 50" fill="none" strokeWidth="0.6" strokeDasharray="2 1" />
                <path d="M 0 85 Q 50 70 80 90 T 100 75" fill="none" strokeWidth="0.6" strokeDasharray="2 1" />
                <text x="80" y="30" fill="#34D399" fontSize="3" fontFamily="monospace">ELEV: +142.5m</text>
              </svg>
            )}

            {stageIndex === 1 && (
              <div className="w-full h-full bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:30px_30px]" />
            )}

            {stageIndex === 3 && (
              <svg className="w-full h-full stroke-emerald-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="10" y="10" width="80" height="80" rx="5" fill="none" stroke="#34D399" strokeWidth="0.8" strokeDasharray="3 2" />
                <path d="M 10 50 C 30 30, 70 70, 90 50" fill="none" stroke="#F59E0B" strokeWidth="1.2" />
                <text x="50" y="45" fill="#F59E0B" fontSize="3.5" fontFamily="monospace" textAnchor="middle">1.2 KM SHADED JOGGING LOOP</text>
              </svg>
            )}

            {stageIndex === 4 && (
              <svg className="w-full h-full stroke-amber-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="25" y="20" width="50" height="60" fill="none" stroke="#F59E0B" strokeWidth="0.8" />
                <line x1="25" y1="40" x2="75" y2="40" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="1 1" />
                <line x1="25" y1="60" x2="75" y2="60" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="1 1" />
                <text x="50" y="15" fill="#FBBF24" fontSize="3.5" fontFamily="monospace" textAnchor="middle">189 VILLAS STRUCTURAL FRAME</text>
              </svg>
            )}

            {stageIndex === 6 && (
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="30" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="15" fill="#F59E0B" fillOpacity="0.25" stroke="#F59E0B" strokeWidth="0.8" />
                <text x="50" y="52" fill="#FDE68A" fontSize="3" fontFamily="monospace" textAnchor="middle">15,000 SQ.FT CLUBHOUSE ANCHOR</text>
              </svg>
            )}

            {stageIndex === 7 && (
              <div className="w-full h-full border-4 border-[#F97316]/40 m-2 flex items-center justify-center">
                <span className="text-[9px] font-mono text-[#F97316] uppercase tracking-[0.3em] font-bold bg-[#0F172A]/80 px-4 py-1 rounded-full border border-[#F97316]">
                  COMPLETED 10-ACRE ESTATE DESTINATION
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* View Mode & Telemetry Header Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#0F172A]/90 backdrop-blur-md text-[#F97316] text-xs font-mono font-bold border border-[#F97316]/40">
            STAGE 0{stageIndex + 1}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#0F172A]/90 p-1 rounded-full border border-[slate-200]/30 backdrop-blur-md">
          <button
            onClick={() => setViewMode('3D')}
            className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              viewMode === '3D'
                ? 'bg-[#F97316] text-[#0F172A] shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Box className="w-3 h-3" />
            <span>3D MODEL</span>
          </button>

          <button
            onClick={() => setViewMode('HD')}
            className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              viewMode === 'HD'
                ? 'bg-[#F97316] text-[#0F172A] shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3 h-3" />
            <span>HD PHOTO</span>
          </button>
        </div>
      </div>
    </div>
  );
}
