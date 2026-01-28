import React from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import WorkGallery from './components/WorkGallery.tsx';
import About from './components/About.tsx';
// Contact section removed
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-purple selection:text-white relative">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-pink-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
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

export default App;