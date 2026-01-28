import React from 'react';
import { SectionId } from '../types.ts';

const tools = [
  { abbr: 'F', label: 'Figma' },
  { abbr: 'Ps', label: 'Photoshop' },
  { abbr: 'Ai', label: 'Illustrator' },
  { abbr: 'Ae', label: 'After Effects' },
  { abbr: 'Bl', label: 'Blender' },
];

const Hero: React.FC = () => {
  return (
    <section
      id={SectionId.HERO}
      className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20"
    >
      <div className="absolute inset-0 design-grid pointer-events-none" />

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
              className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md"
            >
              <span className="text-lg font-bold text-slate-800">{t.abbr}</span>
            </div>
          ))}
        </div>
      </div>

      {/* decorative floating tiles */}
      <div className="hidden lg:block absolute left-8 top-32">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">F</div>
      </div>
      <div className="hidden lg:block absolute right-8 top-40">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">Ai</div>
      </div>
    </section>
  );
};

export default Hero;