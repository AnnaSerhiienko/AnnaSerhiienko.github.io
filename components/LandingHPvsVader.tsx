import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ArrowLeft, Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';
import HPVaderCarousel from './HPVaderCarousel.tsx';

/* ----------------------------- constants (no magic numbers) ----------------------------- */

const COLORS = {
  bg: '#1a2238',
  red: '#7a1a1a',
  redHover: '#9a2222',
  white: '#fff',
};

const BREAKPOINTS = {
  sm: 480,
  md: 768,
  lg: 900,
  xl: 1024,
};

const LAYOUT = {
  navHeight: 72,
  navHeightMobile: 60,
  navPaddingX: 48,
  navPaddingXTablet: 16,
  navPaddingXMobile: 8,
  heroMinHeight: 640,
  sectionPaddingY: 80,
  sectionPaddingYMobile: 60,
  sectionPaddingX: 48,
  sectionPaddingXMobile: 24,
  footerPaddingX: 48,
  footerPaddingXMobile: 20,
  footerCharHeight: 320,
  footerCharHeightMobile: 200,
  drawerMaxWidth: 320,
  drawerWidthVw: 80,
};

const HERO = {
  contentBottomPadding: 88,
  contentBottomPaddingMobile: 56,
};

const PARTICLES = {
  count: 12,
  minSize: 2,
  maxSize: 5,
  minDuration: 8,
  maxDuration: 14,
  bottomOffset: -10,
};

const ASSETS_BASE = '/assets/images/brand/Lending Harry Potter vs Darth_Vader';
const ASSET_VERSION = '1'; // bump when you replace files (stable, browser-cache friendly)

const ASSETS = {
  backHogwarts: `${ASSETS_BASE}/Back_Hogwarts.png?v=${ASSET_VERSION}`,
  backPlane: `${ASSETS_BASE}/Back_plane.png`,
  vaderFull: `${ASSETS_BASE}/Darth_Vader_full height.png`,
  vaderPart2: `${ASSETS_BASE}/Darth_Vader_part_2.png`,
  potterFull: `${ASSETS_BASE}/Harry_Potter_full_height.png`,
  potterPart2: `${ASSETS_BASE}/Harry_Potter_part_2.png`,
  logo: `${ASSETS_BASE}/Property 1=Default.svg`,
  heroVideo: `${ASSETS_BASE}/Video Hero.mp4`,
  wand: `${ASSETS_BASE}/Harry Potter's wand.png`,
  wandLight: `${ASSETS_BASE}/Harry Potter's wand_light.png`,
  saber: `${ASSETS_BASE}/Darth_Vader's_lightsaber.png`,
  saberLight: `${ASSETS_BASE}/Darth_Vader's_lightsaber_light.png`,
} as const;

const mediaDown = (px: number) => `@media (max-width: ${px}px)`;

/* ----------------------------------- animations ----------------------------------- */

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(50px) }
  to   { opacity: 1; transform: translateY(0) }
`;
const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`;
const float = keyframes`
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-12px) }
`;
const particleDrift = keyframes`
  0%   { transform: translateY(0) rotate(0deg); opacity: 0 }
  10%  { opacity: 1 }
  90%  { opacity: 1 }
  100% { transform: translateY(-100vh) rotate(720deg); opacity: 0 }
`;

/* ----------------------------------- helpers ----------------------------------- */

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const useInView = ({ threshold = 0.2, rootMargin = '0px', once = true }: InViewOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
};

type SectionId = 'home' | 'harry' | 'vader' | 'contact';

const scrollToId = (id: string, offsetPx: number) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offsetPx;
  window.scrollTo({ top, behavior: 'smooth' });
};

/* ----------------------------------- styles ----------------------------------- */

const Page = styled.div`
  min-height: ${nonTokenValues.layout.fullViewportHeight};
  background: ${COLORS.bg};
  color: ${COLORS.white};
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
`;

const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.55);
    color: ${COLORS.white};
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${LAYOUT.navHeight}px;
  padding: 0 ${LAYOUT.navPaddingX}px;
  background: rgba(26, 34, 56, 0.55);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  ${mediaDown(BREAKPOINTS.lg)} {
    padding: 0 ${LAYOUT.navPaddingXTablet}px;
  }
  ${mediaDown(BREAKPOINTS.md)} {
    height: ${LAYOUT.navHeightMobile}px;
    padding: 0 ${LAYOUT.navPaddingXMobile}px;
  }
`;

const NavLogo = styled.img`
  height: 28px;
  width: auto;
  opacity: 1;
  ${mediaDown(BREAKPOINTS.md)} {
    margin: 12px 0;
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 36px;

  ${mediaDown(BREAKPOINTS.lg)} {
    gap: 18px;
  }
  ${mediaDown(BREAKPOINTS.md)} {
    display: none;
  }
`;

const NavLinkBtn = styled.button<{ $active?: boolean }>`
  font-family: 'Gideon Roman', serif;
  font-size: 16px;
  cursor: pointer;
  color: ${(p) => (p.$active ? COLORS.white : 'rgba(255,255,255,.6)')};
  background: none;
  border: none;
  padding: 8px 10px;
  border-radius: 8px;
  transition: color 0.2s, box-shadow 0.2s;

  &:hover,
  &:focus-visible {
    color: #ff2222;
    outline: none;
  }
`;

const NavPlayBtn = styled.button`
  padding: 12px 28px;
  border: none;
  border-radius: 999px;
  background: ${COLORS.red};
  color: ${COLORS.white};
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${COLORS.redHover};
    box-shadow: 0 4px 28px rgba(120, 20, 20, 0.5);
  }

  ${mediaDown(BREAKPOINTS.md)} {
    display: none;
  }
`;

const DrawerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${COLORS.white};
  padding: 8px;
  cursor: pointer;
  z-index: 300;

  ${mediaDown(BREAKPOINTS.md)} {
    display: block;
  }
`;

const DrawerOverlay = styled.div<{ $open: boolean }>`
  display: none;

  ${mediaDown(BREAKPOINTS.md)} {
    display: ${(p) => (p.$open ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 299;
    animation: ${fadeIn} 0.2s;
  }
`;

const Drawer = styled.aside<{ $open: boolean }>`
  display: none;

  ${mediaDown(BREAKPOINTS.md)} {
    display: ${(p) => (p.$open ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: ${LAYOUT.drawerWidthVw}vw;
    max-width: ${LAYOUT.drawerMaxWidth}px;
    height: 100vh;
    background: rgba(26, 34, 56, 0.98);
    box-shadow: -2px 0 24px 0 rgba(0, 0, 0, 0.18);
    z-index: 300;
    padding: 32px 24px 24px;
    animation: ${fadeIn} 0.2s;
  }
`;

const DrawerClose = styled.button`
  background: none;
  border: none;
  color: ${COLORS.white};
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
`;

const HeroWrap = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: ${LAYOUT.heroMinHeight}px;
  overflow: hidden;
  margin-top: ${LAYOUT.navHeight}px;

  ${mediaDown(BREAKPOINTS.md)} {
    margin-top: ${LAYOUT.navHeightMobile}px;
  }
`;

const HeroVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    ${COLORS.bg} 0%,
    rgba(26, 34, 56, 0.6) 30%,
    rgba(26, 34, 56, 0.15) 60%,
    rgba(26, 34, 56, 0.05) 100%
  );
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  padding: 0 ${LAYOUT.navPaddingX}px ${HERO.contentBottomPadding}px;
  animation: ${fadeInUp} 1s ease-out 0.6s both;

  ${mediaDown(BREAKPOINTS.md)} {
    padding: 0 24px ${HERO.contentBottomPaddingMobile}px;
  }
`;

const HeroEnter = styled.div`
  font-family: 'Katibeh', cursive;
  font-size: 64px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: -10px;

  ${mediaDown(BREAKPOINTS.md)} {
    font-size: 40px;
    margin-bottom: -6px;
  }
`;

const HeroGameRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
`;

const HeroGame = styled.h1`
  font-family: 'Katibeh', cursive;
  font-size: 164px;
  font-weight: 400;
  line-height: 0.9;
  color: ${COLORS.white};
  margin: 0;

  ${mediaDown(BREAKPOINTS.xl)} {
    font-size: 120px;
  }
  ${mediaDown(BREAKPOINTS.md)} {
    font-size: 80px;
  }
  ${mediaDown(BREAKPOINTS.sm)} {
    font-size: 56px;
  }
`;

const HeroWorld = styled.span`
  font-family: 'Katibeh', cursive;
  font-size: 64px;
  color: rgba(255, 255, 255, 0.8);

  ${mediaDown(BREAKPOINTS.md)} {
    font-size: 40px;
  }
`;

const HeroBtns = styled.div`
  display: flex;
  gap: 16px;
  margin-top: -40px;

  ${mediaDown(BREAKPOINTS.md)} {
    margin-top: -20px;
  }
  ${mediaDown(BREAKPOINTS.sm)} {
    margin-top: -12px;
  }
`;

const baseBtn = css`
  padding: 14px 38px;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;

  ${mediaDown(BREAKPOINTS.sm)} {
    padding: 12px 28px;
    font-size: 14px;
  }
`;

const BtnRed = styled.button`
  ${baseBtn};
  border: none;
  background: ${COLORS.red};
  color: ${COLORS.white};
  font-weight: 600;

  &:hover {
    background: ${COLORS.redHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(120, 20, 20, 0.5);
  }
`;

const BtnGhost = styled.button`
  ${baseBtn};
  background: rgba(255, 255, 255, 0.04);
  color: ${COLORS.white};
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.22);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const CharSection = styled.section<{ $reverse?: boolean; $pullUp?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: ${LAYOUT.sectionPaddingY}px ${LAYOUT.sectionPaddingX}px;
  overflow: hidden;
  flex-direction: ${(p) => (p.$reverse ? 'row-reverse' : 'row')};
  background: ${COLORS.bg};
  ${(p) => (p.$pullUp ? 'margin-top: -100px;' : '')}

  ${mediaDown(BREAKPOINTS.lg)} {
    flex-direction: column;
    padding: ${LAYOUT.sectionPaddingYMobile}px ${LAYOUT.sectionPaddingXMobile}px;
    min-height: auto;
    margin-top: 0;
  }
`;

const BgImage = styled.img<{ $side: 'left' | 'right'; $fit?: 'contain' | 'cover'; $w?: string }>`
  position: absolute;
  ${(p) => (p.$side === 'left' ? 'left: 0;' : 'right: 0;')}
  ${(p) => (p.$side === 'left' ? 'top: 0;' : 'bottom: 0;')}
  width: ${(p) => p.$w ?? '100%'};
  height: 100%;
  object-fit: ${(p) => p.$fit ?? 'contain'};
  object-position: ${(p) => (p.$side === 'left' ? 'left top' : 'right bottom')};
  z-index: 0;
  opacity: 0.48;
  pointer-events: none;
`;

const CharImg = styled.div<{ $visible: boolean; $highlight?: string }>`
  flex: 0 0 45%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;

  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? '0' : '50px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  position: relative;

  img {
    max-height: 85vh;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4));
    animation: ${float} 5s ease-in-out infinite;
    transition: filter 0.3s, transform 0.3s;
  }

  &:hover img {
    transform: scale(1.05);
    filter: drop-shadow(0 0 12px ${(p) => p.$highlight ?? '#fff'})
      drop-shadow(0 0 24px ${(p) => p.$highlight ?? '#fff'});
  }

  ${mediaDown(BREAKPOINTS.lg)} {
    flex: none;
    margin-bottom: 32px;
    img {
      max-height: 50vh;
    }
  }
`;

const CharText = styled.div<{ $visible: boolean }>`
  flex: 1;
  z-index: 1;
  padding: 0 48px;

  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateX(${(p) => (p.$visible ? '0' : '40px')});
  transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;

  ${mediaDown(BREAKPOINTS.lg)} {
    padding: 0;
    text-align: center;
    transform: translateY(${(p) => (p.$visible ? '0' : '30px')});
  }
`;

const CharTitle = styled.h2`
  font-family: 'Gideon Roman', serif;
  font-size: 36px;
  font-weight: 400;
  margin: 0 0 20px;
  color: ${COLORS.white};
`;

const CharDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.6);
  max-width: 480px;

  ${mediaDown(BREAKPOINTS.lg)} {
    margin: 0 auto;
  }
`;

const WandImageWrap = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto 32px;
  position: relative;
  width: 100%;
`;

const WandImage = styled.img`
  display: block;
  margin: 0 0 40px 0;
  width: 320px;
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: filter 0.4s, box-shadow 0.4s;

  ${mediaDown(BREAKPOINTS.lg)} {
    width: 180px;
    margin-bottom: 24px;
  }
  ${mediaDown(BREAKPOINTS.md)} {
    display: none !important;
  }
`;

const SaberWrap = styled.div`
  position: relative;
  display: block;
  width: 260px;
  margin: 0 0 12px auto;
  transform: translateX(-35%) translateY(-5%);
  cursor: pointer;

  ${mediaDown(BREAKPOINTS.md)} {
    display: none !important;
  }
`;

const SaberImg = styled.img<{ $visible: boolean }>`
  width: 100%;
  display: block;
  transition: opacity 0.35s ease;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  ${(p) =>
    p.$visible
      ? css`
          position: relative;
        `
      : css`
          position: absolute;
          inset: 0;
        `}
`;

type ParticleModel = {
  key: string;
  xPct: number;
  delay: number;
  size: number;
  duration: number;
};

const Particle = styled.div<{ $xPct: number; $delay: number; $size: number; $duration: number }>`
  position: absolute;
  left: ${(p) => p.$xPct}%;
  bottom: ${PARTICLES.bottomOffset}px;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  animation: ${particleDrift} ${(p) => p.$duration}s linear infinite;
  animation-delay: ${(p) => p.$delay}s;
`;

const FooterWrap = styled.footer`
  position: relative;
  background: ${COLORS.bg};
  padding: 0 ${LAYOUT.footerPaddingX}px 36px;
  overflow: hidden;

  ${mediaDown(BREAKPOINTS.md)} {
    padding: 0 ${LAYOUT.footerPaddingXMobile}px 28px;
  }
`;

const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  margin-bottom: 48px;
`;

const FooterGrid = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;

  ${mediaDown(640)} {
    gap: 28px;
  }
`;

const FooterBrand = styled.div`
  max-width: 200px;
  flex-shrink: 0;
`;

const FooterBrandTitle = styled.h3`
  font-family: 'Gideon Roman', serif;
  font-size: 36px;
  font-weight: 400;
  color: ${COLORS.white};
  margin: 0 0 4px;
  letter-spacing: 3px;
`;

const FooterBrandSub = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.35);
  margin: 0 0 20px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialCircle = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    color: ${COLORS.white};
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;

const FooterCol = styled.div`
  min-width: 120px;
`;

const FooterColTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.white};
  margin: 0 0 16px;
`;

const FooterLink = styled.a`
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  margin-bottom: 12px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const FooterCharLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: ${LAYOUT.footerCharHeight}px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    object-position: bottom left;
  }

  ${mediaDown(BREAKPOINTS.md)} {
    height: ${LAYOUT.footerCharHeightMobile}px;
  }
`;

const FooterCharRight = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: ${LAYOUT.footerCharHeight}px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    object-position: bottom right;
  }

  ${mediaDown(BREAKPOINTS.md)} {
    height: ${LAYOUT.footerCharHeightMobile}px;
  }
`;

const FooterBottom = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.2);

  ${mediaDown(640)} {
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }
`;

/* ----------------------------------- component ----------------------------------- */

interface Props {
  onBack: () => void;
}

const LandingHPvsVader: React.FC<Props> = ({ onBack }) => {
  const { t } = useLanguage();
  const lt: any = t.landingHpVsVader;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [wandHovered, setWandHovered] = useState(false);
  const [saberHovered, setSaberHovered] = useState(false);

  const harry = useInView({ threshold: 0.15, once: true });
  const vader = useInView({ threshold: 0.15, once: true });

  const navOffset = useMemo(() => (window.innerWidth <= BREAKPOINTS.md ? LAYOUT.navHeightMobile : LAYOUT.navHeight), []);

  const particles = useMemo<ParticleModel[]>(() => {
    const rand = (min: number, max: number) => min + Math.random() * (max - min);
    return Array.from({ length: PARTICLES.count }, (_, i) => ({
      key: `p-${i}`,
      xPct: rand(0, 100),
      delay: rand(0, 8),
      size: rand(PARTICLES.minSize, PARTICLES.maxSize),
      duration: rand(PARTICLES.minDuration, PARTICLES.maxDuration),
    }));
  }, []);

  // close drawer on ESC
  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen]);

  const go = (id: SectionId) => {
    setDrawerOpen(false);
    scrollToId(id, navOffset);
  };

  return (
    <Page>
      <Nav>
        <BackBtn onClick={onBack}>
          <ArrowLeft size={16} />
          {lt.backToPortfolio}
        </BackBtn>

        {/* Optional logo (kept, previously unused). Remove if you don't want it. */}
        {/* <NavLogo src={ASSETS.logo} alt="Logo" /> */}

        <NavLinks>
          <NavLinkBtn $active onClick={() => go('home')}>
            {lt.navHome}
          </NavLinkBtn>
          <NavLinkBtn onClick={() => go('harry')}>{lt.navGame}</NavLinkBtn>
          <NavLinkBtn onClick={() => go('contact')}>{lt.navContact}</NavLinkBtn>
        </NavLinks>

        <NavPlayBtn onClick={() => go('harry')}>{lt.playNow}</NavPlayBtn>

        <DrawerButton aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
          <MenuIcon size={28} />
        </DrawerButton>

        <DrawerOverlay $open={drawerOpen} onClick={() => setDrawerOpen(false)} />

        <Drawer $open={drawerOpen} aria-label="Mobile menu">
          <DrawerClose aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
            <CloseIcon size={28} />
          </DrawerClose>

          <NavLinkBtn style={{ margin: '32px 0 0', fontSize: 20 }} $active onClick={() => go('home')}>
            {lt.navHome}
          </NavLinkBtn>
          <NavLinkBtn style={{ margin: '18px 0 0', fontSize: 20 }} onClick={() => go('harry')}>
            {lt.navGame}
          </NavLinkBtn>
          <NavLinkBtn style={{ margin: '18px 0 0', fontSize: 20 }} onClick={() => go('contact')}>
            {lt.navContact}
          </NavLinkBtn>

          <NavPlayBtn style={{ display: 'block', margin: '32px 0 0', width: '100%' }} onClick={() => go('harry')}>
            {lt.playNow}
          </NavPlayBtn>
        </Drawer>
      </Nav>

      <HeroWrap id="home">
        <HeroVideo src={ASSETS.heroVideo} autoPlay loop muted playsInline />
        <HeroOverlay />

        <HeroContent>
          <HeroEnter>{lt.enterThe}</HeroEnter>
          <HeroGameRow>
            <HeroGame>{lt.gameWorld}</HeroGame>
            <HeroWorld>WORLD</HeroWorld>
          </HeroGameRow>

          <HeroBtns>
            <BtnRed onClick={() => go('harry')}>{lt.playNow}</BtnRed>
            <BtnGhost onClick={() => go('vader')}>{lt.characters}</BtnGhost>
          </HeroBtns>
        </HeroContent>
      </HeroWrap>

      {/* Harry */}
      <CharSection id="harry" ref={harry.ref}>
        <BgImage src={ASSETS.backHogwarts} alt="Hogwarts Castle" $side="right" $fit="contain" />

        {particles.map((p) => (
          <Particle key={`harry-${p.key}`} $xPct={p.xPct} $delay={p.delay} $size={p.size} $duration={p.duration} />
        ))}

        <CharText $visible={harry.visible}>
          <WandImageWrap>
            <WandImage
              src={wandHovered ? ASSETS.wandLight : ASSETS.wand}
              alt="Harry Potter's wand"
              onMouseEnter={() => setWandHovered(true)}
              onMouseLeave={() => setWandHovered(false)}
            />
          </WandImageWrap>

          <CharTitle>{lt.harryTitle}</CharTitle>
          <CharDesc>
            {lt.harryDesc} {lt.harryWeapon ?? ''}
          </CharDesc>
        </CharText>

        <CharImg $visible={harry.visible} $highlight="#f5c542">
          <img src={ASSETS.potterFull} alt="Harry Potter" />
        </CharImg>
      </CharSection>

      {/* Vader */}
      <CharSection id="vader" $reverse $pullUp ref={vader.ref}>
        <BgImage src={ASSETS.backPlane} alt="Plane Background" $side="left" $fit="cover" $w="65%" />

        {particles.map((p) => (
          <Particle key={`vader-${p.key}`} $xPct={p.xPct} $delay={p.delay} $size={p.size} $duration={p.duration} />
        ))}

        <CharText $visible={vader.visible}>
          <SaberWrap onMouseEnter={() => setSaberHovered(true)} onMouseLeave={() => setSaberHovered(false)}>
            <SaberImg src={ASSETS.saber} alt="Darth Vader lightsaber" $visible={!saberHovered} />
            <SaberImg src={ASSETS.saberLight} alt="Darth Vader lightsaber (light)" $visible={saberHovered} />
          </SaberWrap>

          <CharTitle style={{ marginLeft: 32 }}>{lt.vaderTitle}</CharTitle>
          <CharDesc style={{ marginLeft: 32 }}>
            {lt.vaderDesc} {lt.vaderWeapon ?? ''}
          </CharDesc>
        </CharText>

        <CharImg $visible={vader.visible} $highlight="#ff2020">
          <img src={ASSETS.vaderFull} alt="Darth Vader" />
        </CharImg>
      </CharSection>

      <HPVaderCarousel />

      <FooterWrap id="contact">
        <FooterLine />

        <FooterCharLeft>
          <img src={ASSETS.potterPart2} alt="" />
        </FooterCharLeft>
        <FooterCharRight>
          <img src={ASSETS.vaderPart2} alt="" />
        </FooterCharRight>

        <FooterGrid>
          <FooterBrand>
            <FooterBrandTitle>{lt.footerTitle}</FooterBrandTitle>
            <FooterBrandSub>{lt.footerSubtitle}</FooterBrandSub>

            <SocialRow>
              <SocialCircle href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </SocialCircle>

              <SocialCircle href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialCircle>

              <SocialCircle href="#" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialCircle>
            </SocialRow>
          </FooterBrand>

          <FooterCol>
            <FooterColTitle>{lt.features}</FooterColTitle>
            <FooterLink href="#">{lt.coreFeatures}</FooterLink>
            <FooterLink href="#">{lt.proExperience}</FooterLink>
            <FooterLink href="#">{lt.integrations}</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>{lt.learnMore}</FooterColTitle>
            <FooterLink href="#">{lt.blog}</FooterLink>
            <FooterLink href="#">{lt.caseStudies}</FooterLink>
            <FooterLink href="#">{lt.customerStories}</FooterLink>
            <FooterLink href="#">{lt.bestPractices}</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>{lt.support}</FooterColTitle>
            <FooterLink href="#">{lt.contact}</FooterLink>
            <FooterLink href="#">{lt.supportLink}</FooterLink>
            <FooterLink href="#">{lt.legal}</FooterLink>
          </FooterCol>
        </FooterGrid>

        <FooterBottom>
          <span>© 2026 Game World. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </FooterBottom>
      </FooterWrap>
    </Page>
  );
};

export default LandingHPvsVader;
