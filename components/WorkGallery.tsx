import React from 'react';
import { SectionId } from '../types';
import { PROJECTS, WORK_CATEGORIES } from '../constants';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

const WorkGallery: React.FC = () => {
  return (
    <section id={SectionId.WORK} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Selected Works</h2>
          <p className="text-slate-500 max-w-lg text-lg">
            A curated collection of projects across branding, interface design, and digital art.
          </p>
        </div>

        {WORK_CATEGORIES.map((category) => {
          const categoryProjects = PROJECTS.filter(p => p.category === category);
          
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category} className="mb-32 last:mb-0">
              <div className="flex items-center gap-4 mb-10">
                 <h3 className="text-2xl font-bold text-slate-900 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                  {category}
                </h3>
                <div className="h-px bg-slate-200 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                {categoryProjects.map((project) => (
                  <div key={project.id} className="group flex flex-col h-full">
                    {/* Card */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 hover:shadow-xl hover:shadow-brand-purple/10 transition-all duration-500 border border-white">
                      
                      {/* Media */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        {project.mediaType === 'video' ? (
                          <div className="relative w-full h-full">
                            <video 
                              src={project.mediaUrl} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              muted
                              loop
                              playsInline
                              autoPlay={false}
                              onMouseEnter={(e) => e.currentTarget.play()}
                              onMouseLeave={(e) => e.currentTarget.pause()}
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full text-slate-900 shadow-lg">
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
                        <a href={project.link} className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                        
                        <div className="absolute top-4 right-4 bg-white p-3 rounded-full text-slate-900 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 pointer-events-none">
                          {project.mediaType !== 'video' && <ArrowUpRight size={20} />}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-purple transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-500 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkGallery;