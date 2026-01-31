import React from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import WorkGallery from './components/WorkGallery.tsx';
import About from './components/About.tsx';
// Contact section removed
import Footer from './components/Footer.tsx';
import { LanguageProvider, useLanguage } from './i18n.tsx';

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLanguage();
  
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 bg-white/80 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-slate-100">
      <button
        onClick={() => setLang('en')}
        className={`w-10 h-10 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
          lang === 'en'
            ? 'bg-slate-900 text-white shadow-md'
            : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
        }`}
        title="English"
      >
        EN
      </button>
      <button
        onClick={() => setLang('uk')}
        className={`w-10 h-10 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
          lang === 'uk'
            ? 'bg-slate-900 text-white shadow-md'
            : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
        }`}
        title="Українська"
      >
        UK
      </button>
    </div>
  );
};

function AppContent() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-purple selection:text-white relative">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-pink-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <LanguageSwitcher />
        <Navigation />
        <main>
          <Hero />
          <WorkGallery />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;