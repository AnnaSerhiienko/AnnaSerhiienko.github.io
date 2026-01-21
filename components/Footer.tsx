import React from 'react';
import { SOCIALS, DESIGNER_NAME } from '../constants';
import { Twitter, Linkedin, Dribbble, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Twitter': return <Twitter size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Dribbble': return <Dribbble size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-white text-slate-900 py-16 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2 tracking-tight">Anna Serhiienko</h3>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {DESIGNER_NAME}. All rights reserved.</p>
        </div>

        <div className="flex gap-4">
          {SOCIALS.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1"
              aria-label={social.name}
            >
              {getIcon(social.icon)}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="text-slate-500 text-sm mb-2">Portfolio 2024</p>
          <a href="#" className="text-sm text-slate-400 hover:text-brand-purple font-medium">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;