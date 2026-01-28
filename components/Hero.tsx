import React from 'react';
import { SectionId } from '../types.ts';
import { Figma, Image as ImageIcon, PenTool, Gamepad2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id={SectionId.HERO}
      className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden"
    >
      {/* Floating decorative icon tiles */}
      <div className="hidden lg:block absolute left-8 top-32 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
        <Figma className="w-8 h-8 text-purple-600" />
      </div>
      <div className="hidden lg:block absolute left-16 bottom-40 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
        <ImageIcon className="w-8 h-8 text-pink-500" />
      </div>
      <div className="hidden lg:block absolute right-16 top-40 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
        <PenTool className="w-8 h-8 text-blue-500" />
      </div>
      <div className="hidden lg:block absolute right-8 bottom-32 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
        <Gamepad2 className="w-8 h-8 text-teal-500" />
      </div>

      <div className="z-10 max-w-6xl mx-auto animate-reveal relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 glass border border-slate-200 rounded-full mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-800 text-xs font-bold uppercase tracking-widest">Available for new projects</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 leading-tight tracking-tight">
          Where ideas turn into
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold">visual reality.</span>
        </h1>
      </div>

    </section>
  );
};

export default Hero;