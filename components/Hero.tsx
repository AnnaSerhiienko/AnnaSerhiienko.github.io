import React, { useRef, useState } from 'react';
import { SectionId } from '../types.ts';

const tools = [
  { abbr: 'F', label: 'Figma', color: '#F24E1E' },
  { abbr: 'Ps', label: 'Photoshop', color: '#2B6CB0' },
  { abbr: 'Ai', label: 'Illustrator', color: '#FF8A00' },
  { abbr: 'Ae', label: 'After Effects', color: '#7C3AED' },
  { abbr: 'Bl', label: 'Blender', color: '#F5792A' },
  { abbr: 'Ad', label: 'Adobe', color: '#FF0000' },
];

type TilePos = { x: number; y: number };

const FloatingTile: React.FC<{
  id: string;
  label: string;
  color?: string;
  initial: TilePos;
}> = ({ id, label, color = '#fff', initial }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<TilePos>(initial);
  const dragging = useRef(false);
  const origin = useRef<{x:number;y:number}>({x:0,y:0});

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    origin.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const nx = e.clientX - origin.current.x;
    const ny = e.clientY - origin.current.y;
    setPos({ x: nx, y: ny });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    try { (e.target as Element).releasePointerCapture(e.pointerId); } catch {}
  };

  return (
    <div
      ref={ref}
      role="button"
      aria-label={label}
      title={label}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="hidden lg:flex items-center justify-center rounded-2xl shadow-xl cursor-grab"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        width: 64,
        height: 64,
        background: '#fff',
        transition: 'box-shadow 140ms ease, transform 140ms ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span style={{ color: color, fontWeight: 700 }}>{label}</span>
    </div>
  );
};

const FloatingTiles: React.FC = () => {
  const startPositions: Record<string, TilePos> = {
    F: { x: 48, y: 160 },
    Ps: { x: 120, y: 420 },
    Ai: { x: -120, y: 140 },
    Ae: { x: -80, y: 420 },
    Bl: { x: 220, y: 420 },
    Ad: { x: 260, y: 120 },
  };

  return (
    <>
      {tools.map((t) => (
        <FloatingTile key={t.abbr} id={t.abbr} label={t.abbr} color={t.color} initial={startPositions[t.abbr] ?? {x:0,y:0}} />
      ))}
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      id={SectionId.HERO}
      className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20"
    >

      <div className="z-10 max-w-6xl mx-auto animate-reveal relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 glass border border-slate-200 rounded-full mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-800 text-xs font-bold uppercase tracking-widest">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tighter">
          Where ideas turn into
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 font-serif italic">visual reality.</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mt-6">
          {tools.map((t) => (
            <div
              key={t.abbr}
              aria-label={t.label}
              title={t.label}
              className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md transition-transform duration-150"
            >
              <span className="text-lg font-bold text-slate-800">{t.abbr}</span>
            </div>
          ))}
        </div>
      </div>

      {/* draggable floating tiles (easy to move) */}
      <FloatingTiles />
    </section>
  );
};

export default Hero;