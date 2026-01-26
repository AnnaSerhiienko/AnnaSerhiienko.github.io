import React, { useState, useMemo } from 'react';
import { SectionId } from '../types.js';
import { PROJECTS, WORK_CATEGORIES } from '../constants.js';
import { ArrowUpRight, PlayCircle, Filter, X, ExternalLink, Tag } from 'lucide-react';

const WorkGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...WORK_CATEGORIES];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id={SectionId.WORK} className="py-24 px-6 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">Works</h2>
            <p className="text-slate-500 text-lg md:text-xl">
              Selected projects from 5+ years of craft in branding, digital, and game experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-400 border border-slate-100 hover:border-brand-purple hover:text-brand-purple'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group cursor-pointer animate-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-brand-purple/10 group-hover:-translate-y-2">
                {project.mediaType === 'video' ? (
                  <video 
                    src={project.mediaUrl} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    muted loop playsInline autoPlay
                  />
                ) : (
                  <img 
                    src={project.mediaUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-2">{project.category}</span>
                  <h3 className="text-white text-3xl font-serif font-bold mb-4">{project.title}</h3>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
            <Filter className="mx-auto text-slate-200 mb-4" size={48} />
            <p className="text-slate-400 font-medium font-serif italic text-xl">Quietly awaiting new masterpieces...</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fadeIn">
          <div 
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          />
          
          <div className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-reveal">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-3/5 bg-slate-100 overflow-hidden h-[300px] md:h-auto">
              {selectedProject.mediaType === 'video' ? (
                <video src={selectedProject.mediaUrl} className="w-full h-full object-cover" autoPlay muted loop controls />
              ) : (
                <img src={selectedProject.mediaUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
              )}
            </div>

            <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Tag size={14} className="text-brand-purple" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">{selectedProject.category}</span>
              </div>
              
              <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">{selectedProject.title}</h3>
              
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                {selectedProject.description}
              </p>

              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Core Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 border border-slate-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100">
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-purple transition-all shadow-xl shadow-slate-900/10"
                >
                  View Case Study
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;