import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, Figma, PenTool, Image as ImageIcon, Gamepad2 } from 'lucide-react';

const Hero: React.FC = () => {
  const openEmail = () => {
    window.location.href = 'mailto:hi.anna.design@gmail.com';
  };

  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20"
    >
      {/* Designer Grid Overlay */}
      <div className="absolute inset-0 design-grid pointer-events-none" />
      
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px] animate-pulse" />

      <div className="z-10 max-w-6xl mx-auto animate-reveal relative">
        
        {/* Animated Floating Badges */}
        <div className="hidden lg:block absolute -left-20 top-0 glass p-5 rounded-3xl shadow-2xl shadow-brand-purple/10 animate-float">
          <Figma className="text-[#F24E1E] w-10 h-10 mb-2" />
          <div className="h-1.5 w-12 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-brand-purple w-4/5"></div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute -right-20 bottom-1/3 glass p-5 rounded-3xl shadow-2xl shadow-brand-pink/10 animate-float-delayed">
          <Gamepad2 className="text-brand-pink w-10 h-10 mb-2" />
          <span className="text-[10px] font-bold text-slate-400 tracking-tighter uppercase">Game Design</span>
        </div>

        <div className="inline-flex items-center gap-2 px-5 py-2 glass border border-slate-200 rounded-full mb-10 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-slate-800 text-xs font-bold uppercase tracking-widest">Available for Freelance</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-slate-900 mb-10 leading-[0.9] tracking-tighter">
          Visual <br />
          <span className="font-serif italic text-brand-purple">Storyteller</span>
        </h1>
        
        <p className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          Anna Serhiienko is a multidisciplinary designer based in <span className="text-slate-900 font-medium">Ukraine</span>, crafting brand systems, intuitive interfaces, and immersive game art.
        </p>
        
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