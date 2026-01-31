import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import WorkGallery from './components/WorkGallery.tsx';
import About from './components/About.tsx';
// Contact section removed
import Footer from './components/Footer.tsx';
import { LanguageProvider, useLanguage } from './i18n.tsx';
import { AppView } from './views.ts';
import { SectionId } from './types.ts';
import AppIconsSplashScreens from './components/AppIconsSplashScreens.tsx';
import ScrollProgress from './components/ScrollProgress.tsx';

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const AppShell = styled.div`
  min-height: 100vh;
  position: relative;
  color: ${({ theme }) => theme.colors.slate[900]};
  background: ${({ theme }) => theme.colors.white};
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const GradientBlob = styled.div<{ $position: 'top-left' | 'top-right' | 'bottom-left' }>`
  position: absolute;
  border-radius: 999px;
  filter: blur(120px);
  opacity: 0.7;
  animation: ${pulse} 3s ease-in-out infinite;

  ${({ $position }) =>
    $position === 'top-left' &&
    `
      top: -10%;
      left: -10%;
      width: 50%;
      height: 50%;
      background: rgba(59, 130, 246, 0.2);
    `}

  ${({ $position }) =>
    $position === 'top-right' &&
    `
      top: 20%;
      right: -10%;
      width: 40%;
      height: 40%;
      background: rgba(124, 58, 237, 0.2);
      animation: none;
    `}

  ${({ $position }) =>
    $position === 'bottom-left' &&
    `
      bottom: -10%;
      left: 20%;
      width: 50%;
      height: 50%;
      background: rgba(236, 72, 153, 0.2);
      animation: none;
    `}
`;

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

const LanguageSwitch = styled.div`
  position: fixed;
  right: ${({ theme }) => theme.spacing[6]};
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radii.full};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.slate[100]};
`;

const LangButton = styled.button<{ $active: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.slate[400])};
  background: ${({ theme, $active }) => ($active ? theme.colors.slate[900] : 'transparent')};
  box-shadow: ${({ theme, $active }) => ($active ? theme.shadows.sm : 'none')};

  &:hover {
    color: ${({ theme }) => theme.colors.slate[900]};
    background: ${({ theme, $active }) => ($active ? theme.colors.slate[900] : theme.colors.slate[100])};
  }
`;
const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLanguage();
  
  return (
    <LanguageSwitch>
      <LangButton $active={lang === 'en'} onClick={() => setLang('en')} title="English">
        EN
      </LangButton>
      <LangButton $active={lang === 'uk'} onClick={() => setLang('uk')} title="Українська">
        UK
      </LangButton>
    </LanguageSwitch>
  );
};

function AppContent() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.PORTFOLIO);
  const [currentSection, setCurrentSection] = useState<SectionId>(SectionId.HERO);
  const appIconsHash = 'app-icons';

  useEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) return;
      const hash = window.location.hash.replace('#', '');
      if (hash === appIconsHash) {
        setCurrentView(AppView.APP_ICONS);
        return;
      }
      const id = hash as SectionId;
      const target = document.getElementById(id);
      if (target) {
        setCurrentView(AppView.PORTFOLIO);
        setCurrentSection(id);
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  useEffect(() => {
    if (currentView !== AppView.PORTFOLIO) return;
    const target = document.getElementById(currentSection);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentView, currentSection]);

  const handleNavigate = (sectionId: SectionId) => {
    setCurrentView(AppView.PORTFOLIO);
    setCurrentSection(sectionId);
    window.location.hash = sectionId;
  };

  const handleBackToPortfolio = () => {
    setCurrentView(AppView.PORTFOLIO);
    setCurrentSection(SectionId.WORK);
    window.location.hash = SectionId.WORK;
  };

  return (
    <AppShell>
      <Background>
        <GradientBlob $position="top-left" />
        <GradientBlob $position="top-right" />
        <GradientBlob $position="bottom-left" />
      </Background>

      <Foreground>
        <ScrollProgress />
        {currentView === AppView.PORTFOLIO && (
          <>
            <LanguageSwitcher />
            <Navigation onNavigate={handleNavigate} />
          </>
        )}
        {currentView === AppView.PORTFOLIO ? (
          <>
            <main>
              <Hero />
              <WorkGallery />
              <About />
            </main>
            <Footer />
          </>
        ) : (
          <AppIconsSplashScreens onBack={handleBackToPortfolio} />
        )}
      </Foreground>
    </AppShell>
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