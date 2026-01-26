import React from 'react';
import Navigation from './components/Navigation.js';
import Hero from './components/Hero.js';
import WorkGallery from './components/WorkGallery.js';
import About from './components/About.js';
import ChatWidget from './components/ChatWidget.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-purple selection:text-white relative">
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
          <ChatWidget />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;