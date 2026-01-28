import React, { useState, useEffect } from 'react';
import { SectionId } from '../types.ts';
import { Menu, X, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const openEmail = () => {
    window.location.href = 'mailto:hi.anna.design@gmail.com';
  };

  const downloadCV = () => {
    alert("CV Download would trigger here (anna_serhiienko_resume.pdf)");
  };

  const navLinks = [
    { label: 'Work', id: SectionId.WORK },
    { label: 'About', id: SectionId.ABOUT },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-2xl md:rounded-full ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-xl shadow-2xl shadow-slate-200/50 py-3 px-8 border border-white/20' 
            : 'bg-transparent py-6 px-8'
        }`}
      >
        <div className="flex justify-between items-center">
          <div 
            className="text-xl font-bold tracking-tighter cursor-pointer text-slate-900 flex items-center gap-1 group"
            onClick={() => scrollToSection(SectionId.HERO)}
          >
            <span className="font-serif italic text-brand-purple group-hover:rotate-12 transition-transform">A.</span>
            <span className="hidden sm:inline">Serhiienko</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-purple transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-4">
              <button 
                onClick={downloadCV}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
              >
                <FileText size={16} />
                CV
              </button>
              <button 
                onClick={openEmail}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-purple hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-900/10"
              >
                Hire Me
              </button>
            </div>
          </div>

          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl p-8 flex flex-col justify-center space-y-8 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="text-left text-4xl font-serif font-bold text-slate-900 hover:text-brand-purple transition-colors"
          >
            {link.label}
          </button>
        ))}
        <div className="pt-8 border-t border-slate-100 flex flex-col gap-4">
          <button 
            onClick={downloadCV}
            className="text-left text-xl font-bold text-slate-400 flex items-center gap-3"
          >
            <FileText size={24} />
            Download Resume
          </button>
          <button 
            onClick={openEmail}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl text-lg font-bold"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;