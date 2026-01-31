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
import AppStoreScreenshots from './components/AppStoreScreenshots.tsx';
import ScrollProgress from './components/ScrollProgress.tsx';
import { nonTokenValues } from './design-system/nonTokenValues.ts';

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const AppShell = styled.div`
  min-height: ${nonTokenValues.layout.fullViewportHeight};
  position: relative;
  color: ${({ theme }) => theme.colors.slate[900]};
  background: ${({ theme }) => theme.colors.white};
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${nonTokenValues.zIndex.background};
  pointer-events: none;
  overflow: hidden;
`;

const GradientBlob = styled.div<{ $position: 'top-left' | 'top-right' | 'bottom-left' }>`
  position: absolute;
  border-radius: ${({ theme }) => theme.radii.full};
  filter: blur(${nonTokenValues.effects.blurBlob});
  opacity: ${nonTokenValues.effects.blobOpacity};
  animation: ${pulse} 3s ease-in-out infinite;

  ${({ $position }) =>
    $position === 'top-left' &&
    `
      top: -10%;
      left: -10%;
      width: 50%;
      height: 50%;
      background: ${nonTokenValues.effects.blobBlue};
    `}

  ${({ $position }) =>
    $position === 'top-right' &&
    `
      top: 20%;
      right: -10%;
      width: 40%;
      height: 40%;
      background: ${nonTokenValues.effects.blobPurple};
      animation: none;
    `}

  ${({ $position }) =>
    $position === 'bottom-left' &&
    `
      bottom: -10%;
      left: 20%;
      width: 50%;
      height: 50%;
      background: ${nonTokenValues.effects.blobPink};
      animation: none;
    `}
`;

const Foreground = styled.div`
  position: relative;
  z-index: ${nonTokenValues.zIndex.foreground};
`;

const LanguageSwitch = styled.div`
  position: fixed;
  right: ${({ theme }) => theme.spacing[6]};
  top: 50%;
  transform: translateY(-50%);
  z-index: ${nonTokenValues.zIndex.nav};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${nonTokenValues.effects.glassWhite80};
  backdrop-filter: blur(${nonTokenValues.effects.blurGlass});
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: ${nonTokenValues.sizing.hairline} solid ${({ theme }) => theme.colors.slate[100]};
`;

const LangButton = styled.button<{ $active: boolean }>`
  width: ${({ theme }) => theme.spacing[8]};
  height: ${({ theme }) => theme.spacing[8]};
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
  const { lang, setLang, t } = useLanguage();
  
  return (
    <LanguageSwitch>
      <LangButton $active={lang === 'en'} onClick={() => setLang('en')} title={t.languageSwitch.enTitle}>
        {t.languageSwitch.enShort}
      </LangButton>
      <LangButton $active={lang === 'uk'} onClick={() => setLang('uk')} title={t.languageSwitch.ukTitle}>
        {t.languageSwitch.ukShort}
      </LangButton>
    </LanguageSwitch>
  );
};

function AppContent() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.PORTFOLIO);
  const [currentSection, setCurrentSection] = useState<SectionId>(SectionId.HERO);
  const appIconsHash = 'app-icons';
  const appStoreScreenshotsHash = 'app-store-screenshots';

  useEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) return;
      const hash = window.location.hash.replace('#', '');
      if (hash === appIconsHash) {
        setCurrentView(AppView.APP_ICONS);
        return;
      }
      if (hash === appStoreScreenshotsHash) {
        setCurrentView(AppView.APP_STORE_SCREENSHOTS);
        return;
      }
      const id = hash as SectionId;
      const target = document.getElementById(id);
      if (target) {
        setCurrentView(AppView.PORTFOLIO);
        setCurrentSection(id);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  useEffect(() => {
    if (currentView === AppView.APP_ICONS || currentView === AppView.APP_STORE_SCREENSHOTS) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  const handleNavigate = (sectionId: SectionId) => {
    setCurrentView(AppView.PORTFOLIO);
    setCurrentSection(sectionId);
    window.history.pushState(null, '', `#${sectionId}`);
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBackToPortfolio = () => {
    setCurrentView(AppView.PORTFOLIO);
    setCurrentSection(SectionId.WORK);
    window.history.pushState(null, '', `#${SectionId.WORK}`);
    const target = document.getElementById(SectionId.WORK);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        ) : currentView === AppView.APP_ICONS ? (
          <AppIconsSplashScreens onBack={handleBackToPortfolio} />
        ) : (
          <AppStoreScreenshots onBack={handleBackToPortfolio} />
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