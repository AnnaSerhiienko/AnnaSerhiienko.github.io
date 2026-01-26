import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

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

  const navLinks = [
    { label: 'Work', id: SectionId.WORK },
    { label: 'About', id: SectionId.ABOUT },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-4xl rounded-full ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-black/5 py-3 px-6' 
            : 'bg-transparent py-6 px-6'
        }`}
      >
        <div className="flex justify-between items-center">
          <div 
            className="text-xl font-bold tracking-tight cursor-pointer text-slate-900"
            onClick={() => scrollToSection(SectionId.HERO)}
          >
            <span className="font-serif italic">Anna</span> Serhiienko
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-slate-600 hover:text-brand-purple transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={openEmail}
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-purple transition-all shadow-lg shadow-brand-purple/20 animate-pulse-soft"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white p-6 pt-24 flex flex-col space-y-6 md:hidden animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-2xl font-bold text-slate-900"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={openEmail}
            className="text-left text-2xl font-bold text-brand-purple"
          >
            Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;