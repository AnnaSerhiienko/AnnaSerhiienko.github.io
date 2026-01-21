import React from 'react';
import { SectionId } from '../types';
import { DESIGNER_BIO, SKILLS } from '../constants';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
        {/* Decorative Blob inside card */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl shadow-slate-200">
              <img 
                src="https://picsum.photos/seed/designer/800/1000" 
                alt="Portrait of Anna Serhiienko" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl shadow-slate-200 border border-slate-50">
              <span className="block text-4xl font-bold text-brand-purple mb-1">5+</span>
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Years Experience</span>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About Me</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {DESIGNER_BIO}
            </p>
            
            <div className="mb-10">
              <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                {SKILLS.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-brand-purple" />
                    </div>
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;