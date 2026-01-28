import React from 'react';
import { SectionId } from '../types.ts';
import { ArrowRight, Figma, PenTool, Image as ImageIcon } from 'lucide-react';

const Hero: React.FC = () => {
  const openEmail = () => {
    window.location.href = 'mailto:hi.anna.design@gmail.com';
  };

  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20"
    >
      <div className="absolute inset-0 design-grid pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px] animate-pulse" />

      <div className="z-10 max-w-6xl mx-auto animate-reveal relative">
        <div className="hidden lg:flex absolute -left-16 top-6 gap-4">
          <div className="glass p-4 rounded-3xl shadow-2xl shadow-brand-purple/10 flex flex-col items-center justify-center">
            <Figma className="text-[#F24E1E] w-8 h-8" />
          </div>
          <div className="glass p-4 rounded-3xl shadow-2xl shadow-brand-pink/10 flex flex-col items-center justify-center">
            <ImageIcon className="text-pink-400 w-8 h-8" />
          </div>
          <div className="glass p-4 rounded-3xl shadow-2xl shadow-brand-blue/10 flex flex-col items-center justify-center">
            <PenTool className="text-brand-blue w-8 h-8" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-5 py-2 glass border border-slate-200 rounded-full mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-slate-800 text-xs font-bold uppercase tracking-widest">Available for new projects</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tighter">
          Where ideas turn into
          <br />
          <span className="font-serif italic text-brand-purple">visual reality.</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md">
            <Figma className="w-8 h-8 text-[#F24E1E]" />
          </div>
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md">
            <ImageIcon className="w-8 h-8 text-pink-400" />
          </div>
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md">
            <PenTool className="w-8 h-8 text-brand-purple" />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById(SectionId.WORK)?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-brand-purple transition-all shadow-2xl shadow-slate-900/20 hover:shadow-brand-purple/30 flex items-center gap-3"
          >
            Explore Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={openEmail}
            className="px-10 py-5 glass border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-sm hover:shadow-xl"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-slate-900 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;