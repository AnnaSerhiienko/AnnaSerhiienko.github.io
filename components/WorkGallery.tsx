import React, { useState, useMemo } from 'react';
import { SectionId } from '../types';
import { PROJECTS, WORK_CATEGORIES } from '../constants';
import { ArrowUpRight, PlayCircle, Filter } from 'lucide-react';

const WorkGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Portfolio</h2>
            <p className="text-slate-500 text-lg">
              A collection of digital experiences, brand identities, and visual narratives crafted with purpose.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-purple hover:text-brand-purple'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 min-h-[600px]">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group flex flex-col h-full animate-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Card */}
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-500 border border-slate-100 group">
                
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  {project.mediaType === 'video' ? (
                    <div className="relative w-full h-full">
                      <video 
                        src={project.mediaUrl} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                      <div className="absolute top-6 right-6 glass p-3 rounded-full text-slate-900 shadow-lg">
                        <PlayCircle size={20} />
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={project.mediaUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  <div className="absolute top-6 right-6 bg-white p-4 rounded-full text-slate-900 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <ArrowUpRight size={24} />
                  </div>

                  <div className="absolute bottom-6 left-6 px-4 py-2 glass rounded-full text-xs font-bold text-slate-800 uppercase tracking-widest z-20 shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-purple transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm lg:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-bold tracking-widest uppercase text-slate-400 border border-slate-100 px-3 py-1.5 rounded-lg group-hover:border-brand-purple/20 group-hover:text-slate-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[2.5rem] border border-dashed border-slate-200">
            <Filter className="mx-auto text-slate-200 mb-4" size={48} />
            <p className="text-slate-400 font-medium">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGallery;