import React from 'react';
import { SectionId } from '../types.ts';

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

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-2 leading-tight tracking-tighter">
          Where ideas turn into
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-black">visual reality.</span>
        </h1>
      </div>

    </section>
  );
};

export default Hero;