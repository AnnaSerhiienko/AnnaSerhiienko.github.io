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

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 leading-snug tracking-tight font-sans">
          Where ideas turn into
          <br />
          <span className="text-brand-purple font-semibold">visual reality.</span>
        </h1>

        <div className="mt-12 max-w-2xl mx-auto text-left">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
            Icons are designed in a consistent minimalist outline style suitable for modern digital products. 
            Each icon is placed inside a white rounded square container sized approximately 64×64 px, with large 
            corner radius (20–24 px) and a soft, diffused shadow (0 10px 30px rgba(0,0,0,0.08)), creating a 
            floating card effect. The icons themselves are 28–32 px in size, drawn without fill, using stroke only, 
            with a stroke width of 2–2.5 px and rounded line caps and joins. The visual language is clean, friendly, 
            and modern, avoiding sharp angles and excessive detail, and scales well as SVG. Colors are vibrant yet 
            balanced — purple, blue, pink, or smooth gradients between them — while the container background remains 
            white. Semantically, the icon set represents key design disciplines: an abstract Figma symbol for UI/UX 
            design, a pen tool with an anchor point for vector and branding work, an image icon with mountains and a 
            sun for visual and graphic design, a gamepad with buttons for game design, and an Adobe logo icon, 
            represented as a simplified stylized "A" or angular ribbon mark in an outline or solid-accent style, 
            reflecting Adobe tools and creative software expertise. The system is intended for both static SVG usage 
            and component-based implementations (React, Vue), maintaining clarity and consistency across interfaces.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;