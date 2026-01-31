import React from 'react';
import { SectionId } from '../types.ts';
import { SKILLS } from '../constants.ts';
import { Check, Star } from 'lucide-react';
import { useLanguage, getSkillTranslation } from '../i18n.tsx';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id={SectionId.ABOUT} className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-20 right-[-5%] text-[20vw] font-serif italic text-slate-50 opacity-50 pointer-events-none select-none">
        Creative
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-slate-200 border-8 border-white group">
              <img 
                src="./assets/profile/me.png" 
                alt="Anna Serhiienko" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-8 rounded-[2rem] shadow-2xl shadow-slate-900/5 border border-slate-100 animate-float max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Star className="text-brand-purple fill-brand-purple" size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{t.about.experience}</span>
              </div>
              <p className="text-4xl font-serif font-bold text-slate-900 mb-1">5+ <span className="text-xl">{t.about.years}</span></p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Crafting high-end visual solutions for global clients.</p>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-purple mb-6">{t.about.discovery}</span>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-10 font-serif leading-tight">
              {t.about.heading1} <span className="italic">Emotion</span> <br /> {t.about.heading2}
            </h2>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-12 font-light">
              {t.about.bio}
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                  <div className="w-8 h-px bg-slate-900"></div>
                  {t.about.proficiencies}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {SKILLS.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-brand-purple flex items-center justify-center transition-colors">
                        <Check size={12} className="text-slate-400 group-hover:text-white" />
                      </div>
                      <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{getSkillTranslation(skill, t)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;