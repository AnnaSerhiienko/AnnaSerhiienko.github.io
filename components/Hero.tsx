import React from 'react';
import { SectionId } from '../types';
import { ArrowDown, Figma, PenTool, Image as ImageIcon, Gamepad2, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20"
    >
      <div className="z-10 max-w-5xl mx-auto fade-in relative">
        {/* Floating Icons Decorations */}
        <div className="absolute -left-12 top-0 md:-left-24 md:top-10 p-4 bg-white rounded-2xl shadow-xl shadow-purple-500/10 animate-float hidden md:block">
          <Figma className="text-purple-600 w-8 h-8" />
        </div>
        <div className="absolute -right-12 top-20 md:-right-32 md:top-20 p-4 bg-white rounded-2xl shadow-xl shadow-blue-500/10 animate-float-delayed hidden md:block">
          <PenTool className="text-blue-500 w-8 h-8" />
        </div>
        <div className="absolute left-10 bottom-0 md:-left-16 md:bottom-20 p-4 bg-white rounded-2xl shadow-xl shadow-pink-500/10 animate-float-delayed hidden md:block">
          <ImageIcon className="text-pink-500 w-8 h-8" />
        </div>
        <div className="absolute right-0 bottom-10 md:-right-20 md:bottom-10 p-4 bg-white rounded-2xl shadow-xl shadow-green-500/10 animate-float hidden md:block">
          <Gamepad2 className="text-emerald-500 w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-full mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-slate-600 text-sm font-medium">{t.hero.available}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
          {t.hero.heading1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
             {t.hero.heading2}
          </span>
        </h1>
        
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm Anna Serhiienko, a Graphic Designer crafting digital experiences. 
          Specializing in Brand Identity, UI/UX, and Game Design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById(SectionId.WORK)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-brand-purple transition-all shadow-lg shadow-slate-900/20 hover:shadow-brand-purple/30 flex items-center gap-2 group"
          >
            {t.hero.viewWork}
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;