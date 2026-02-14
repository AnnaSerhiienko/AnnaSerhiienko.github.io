import React, { useEffect, useMemo, useState } from 'react';
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
  focus: 'rgba(255,255,255,.55)',
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

  compositionMaxWidth: 1100,
  compositionHeroOffset: 0,
  compositionGap: 60,
  compositionWeaponsGap: 120,
  compositionImgMaxH: 340,

  footerPaddingX: 48,
  footerPaddingXMobile: 20,
  footerCharHeight: 320,
  footerCharHeightMobile: 200,

  drawerMaxWidth: 320,
  drawerWidthVw: 80,

  sectionSpacer: 48,
};

const HERO = {
  contentBottomPadding: 88,
  contentBottomPaddingMobile: 56,
  btnLiftDesktop: -40,
  btnLiftMobile: -20,
  btnLiftSmall: -12,
};

const ASSETS_BASE = '/assets/images/brand/Lending Harry Potter vs Darth_Vader';
const ASSET_VERSION = '1'; // bump on asset replacement

const ASSETS = {
  backHogwarts: `${ASSETS_BASE}/Back_Hogwarts.png?v=${ASSET_VERSION}`,
  backPlane: `${ASSETS_BASE}/Back_plane.png`,
  vaderFull: `${ASSETS_BASE}/Darth_Vader_full height.png`,
  vaderPart2: `${ASSETS_BASE}/Darth_Vader_part_2.png`,
  potterFull: `${ASSETS_BASE}/Harry_Potter_full_height.png`,
  potterPart2: `${ASSETS_BASE}/Harry_Potter_part_2.png`,
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

const focusRing = css`
  &:focus-visible {
    outline: 2px solid ${COLORS.focus};
    outline-offset: 2px;
  }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 1ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

/* ----------------------------------- helpers ----------------------------------- */

const useLockBodyScroll = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
};

type SectionId = 'home' | 'characters' | 'contact';

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
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  ${reducedMotion}
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
  transition: background 0.2s, color 0.2s;
  ${focusRing}

  &:hover {
    background: rgba(0, 0, 0, 0.55);
    color: ${COLORS.white};
  }
`;

const Nav = styled.header`
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

const NavLinks = styled.nav`
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
  transition: color 0.2s;
  ${focusRing}

  &:hover {
    color: #ff2222;
  }
`;

const NavPlayBtn = styled.button`
  padding: 12px 28px;
  border: none;
  border-radius: 999px;
  background: ${COLORS.red};
  color: ${COLORS.white};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  ${focusRing}

  &:hover {
    background: ${COLORS.redHover};
    box-shadow: 0 4px 28px rgba(120, 20, 20, 0.5);
    transform: translateY(-1px);
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
  ${focusRing}

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
  ${focusRing}
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
  margin-top: ${HERO.btnLiftDesktop}px;

  ${mediaDown(BREAKPOINTS.md)} {
    margin-top: ${HERO.btnLiftMobile}px;
  }
  ${mediaDown(BREAKPOINTS.sm)} {
    margin-top: ${HERO.btnLiftSmall}px;
  }
`;

const baseBtn = css`
  padding: 14px 38px;
  border-radius: 999px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.25s;
  ${focusRing}

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
  font-weight: 700;

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
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.22);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

/* ----------------------------- composition section (like screenshot) ----------------------------- */

const CompositionZone = styled.section`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;

  /* screenshot-like depth */
  background:
    radial-gradient(900px 520px at 50% 35%, rgba(255,255,255,0.06) 0%, rgba(26,34,56,0) 60%),
    linear-gradient(to bottom, #0f1423 0%, ${COLORS.bg} 22%, ${COLORS.bg} 100%);
`;

const CompositionTopFade = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 240px;
  z-index: 4;
  pointer-events: none;
  background: linear-gradient(to bottom, ${COLORS.bg} 0%, rgba(26,34,56,0) 100%);
`;

const CompositionInner = styled.div`
  max-width: ${LAYOUT.compositionMaxWidth}px;
  margin: 0 auto;
  padding: 96px ${LAYOUT.navPaddingX}px 72px;

  ${mediaDown(BREAKPOINTS.md)} {
    padding: 64px 20px 56px;
  }
`;

const CompositionRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  gap: 120px;
  min-height: 420px;
  position: relative;

  ${mediaDown(BREAKPOINTS.md)} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    min-height: 0;
  }
`;

const CompositionChar = styled.article`
  flex: 0 0 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 420px;
  position: relative;
  padding-top: 40px;
  isolation: isolate;

  ${mediaDown(BREAKPOINTS.md)} {
    flex: none;
    min-height: 0;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    padding-top: 24px;
  }
`;

const hoverGlow = (color: string) => css`
  &:hover {
    transform: scale(1.04);
    filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.45)) drop-shadow(0 0 14px ${color})
      drop-shadow(0 0 30px ${color});
  }
`;

const CompositionImg = styled.img<{ $glow: string }>`
  max-height: 340px;
  width: auto;
  max-width: 100%;
  margin-bottom: 18px;
  filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4));
  transition: filter 0.25s, transform 0.25s;
  animation: ${float} 5s ease-in-out infinite;
  ${hoverGlow((p) => p.$glow as any)}
  position: static;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;

  ${mediaDown(BREAKPOINTS.md)} {
    margin-bottom: 12px;
    max-height: 280px;
  }
`;

const CompositionTitle = styled.h2`
  font-family: 'Gideon Roman', serif;
  font-size: 28px;
  color: ${COLORS.white};
  margin: 0 0 12px;
  text-align: center;
  position: relative;
  z-index: 3;
`;

const CompositionDesc = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
  max-width: 360px;
  margin: 0;
  line-height: 1.7;
  position: relative;
  z-index: 3;
`;

const CompositionWeapons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: ${LAYOUT.compositionWeaponsGap}px;
  margin: 52px 0 0;

  ${mediaDown(BREAKPOINTS.md)} {
    gap: 22px;
  }

  ${mediaDown(BREAKPOINTS.sm)} {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
`;

const CompositionWeapon = styled.img<{ $glow: string; $h: number }>`
  height: ${(p) => p.$h}px;
  width: auto;
  max-width: 100%;
  transition: filter 0.25s, transform 0.25s;
  filter: drop-shadow(0 10px 28px rgba(0, 0, 0, 0.35));

  &:hover {
    transform: scale(1.08);
    filter: drop-shadow(0 10px 28px rgba(0, 0, 0, 0.35)) drop-shadow(0 0 14px ${(p) => p.$glow})
      drop-shadow(0 0 30px ${(p) => p.$glow});
  }

  ${mediaDown(BREAKPOINTS.md)} {
    height: ${(p) => Math.max(70, Math.round(p.$h * 0.75))}px;
  }
`;

const CompositionChoose = styled.div`
  margin-top: 32px;
  font-family: 'Gideon Roman', serif;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 2px;
  text-align: center;

  ${mediaDown(BREAKPOINTS.md)} {
    font-size: 22px;
  }
`;

/* particle drift animation for background dots */
const particleDrift = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0 }
  10% { opacity: 1 }
  90% { opacity: 1 }
  100% { transform: translateY(-60vh) scale(0.6); opacity: 0 }
`;

/* particles layer inside each character */
const CharParticleLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;

  /* show more layer (less aggressive fade) */
  mask-image: linear-gradient(
    to top,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 70%,
    rgba(0,0,0,0) 100%
  );
`;

/* soft fog/glow behind characters like screenshot */
const CharFog = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 120%;
  height: 55%;
  transform: translateX(-50%);
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(closest-side at 50% 85%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 70%),
    radial-gradient(closest-side at 50% 100%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 75%);
  filter: blur(2px);
  opacity: 0.9;
`;

const Particle = styled.div<{ $x: number; $size: number; $delay: number; $duration: number }>`
  position: absolute;
  left: ${(p) => p.$x}%;
  bottom: 60px; /* move into “under character” area */
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,1), rgba(255,255,255,0.22));

  box-shadow:
    0 0 ${(p) => Math.max(10, p.$size * 2)}px rgba(255,255,255,0.22),
    0 0 ${(p) => Math.max(18, p.$size * 3)}px rgba(255,255,255,0.10);

  filter: blur(0.6px) saturate(1.15);
  opacity: 0.95;
  animation: ${particleDrift} ${(p) => p.$duration}s linear infinite;
  animation-delay: ${(p) => p.$delay}s;
`;

// Magical background styled-component
const MagicBg = styled.img<{ $side: 'left' | 'right' }>`
  position: absolute;
  ${(p) => (p.$side === 'left' ? 'left: 0;' : 'right: 0;')}
  top: 0;
  width: 36vw;
  max-width: 520px;
  height: 95%;
  object-fit: contain;
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: screen;
  transform: translateY(-6%);
  filter: blur(0.6px) saturate(0.95) contrast(0.98);

  ${mediaDown(BREAKPOINTS.md)} {
    display: none;
  }
`;

const CompositionFade = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 260px;
  z-index: 4;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(26,34,56,0) 0%,
    rgba(26,34,56,0.25) 35%,
    rgba(26,34,56,0.98) 100%
  );
`;

/* ----------------------------- footer ----------------------------- */

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
  ${focusRing}

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
  font-size: 16px;
  font-weight: 700;
  color: ${COLORS.white};
  margin: 0 0 16px;
`;

const FooterLink = styled.a`
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s;
  ${focusRing}

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

  useLockBodyScroll(drawerOpen);

  const navOffset = useMemo(
    () => (window.innerWidth <= BREAKPOINTS.md ? LAYOUT.navHeightMobile : LAYOUT.navHeight),
    []
  );

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

  const makeParticles = (count: number) => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    return Array.from({ length: count }).map((_, i) => ({
      key: `p-${i}-${Math.random().toString(16).slice(2)}`,
      x: rand(8, 92),
      size: Math.round(rand(3, 12)), // bigger
      delay: rand(0, 5),
      duration: Math.round(rand(9, 18)), // a bit faster
    }));
  };

  const vaderParticles = useMemo(() => makeParticles(24), []);
  const harryParticles = useMemo(() => makeParticles(24), []);

  return (
    <Page>
      <Nav>
        <BackBtn type="button" onClick={onBack}>
          <ArrowLeft size={16} />
          {lt.backToPortfolio}
        </BackBtn>

        <NavLinks aria-label="Primary">
          <NavLinkBtn type="button" $active onClick={() => go('home')}>
            {lt.navHome}
          </NavLinkBtn>
          <NavLinkBtn type="button" onClick={() => go('characters')}>
            {lt.navGame}
          </NavLinkBtn>
          <NavLinkBtn type="button" onClick={() => go('contact')}>
            {lt.navContact}
          </NavLinkBtn>
        </NavLinks>

        <NavPlayBtn type="button" onClick={() => go('characters')}>
          {lt.playNow}
        </NavPlayBtn>

        <DrawerButton type="button" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
          <MenuIcon size={28} />
        </DrawerButton>

        <DrawerOverlay $open={drawerOpen} onClick={() => setDrawerOpen(false)} />

        <Drawer $open={drawerOpen} aria-label="Mobile menu">
          <DrawerClose type="button" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
            <CloseIcon size={28} />
          </DrawerClose>

          <NavLinkBtn type="button" style={{ margin: '32px 0 0', fontSize: 20 }} $active onClick={() => go('home')}>
            {lt.navHome}
          </NavLinkBtn>
          <NavLinkBtn type="button" style={{ margin: '18px 0 0', fontSize: 20 }} onClick={() => go('characters')}>
            {lt.navGame}
          </NavLinkBtn>
          <NavLinkBtn type="button" style={{ margin: '18px 0 0', fontSize: 20 }} onClick={() => go('contact')}>
            {lt.navContact}
          </NavLinkBtn>

          <NavPlayBtn
            type="button"
            style={{ display: 'block', margin: '32px 0 0', width: '100%' }}
            onClick={() => go('characters')}
          >
            {lt.playNow}
          </NavPlayBtn>
        </Drawer>
      </Nav>

      <HeroWrap id="home">
        <HeroVideo src={ASSETS.heroVideo} autoPlay loop muted playsInline preload="metadata" />
        <HeroOverlay />

        <HeroContent>
          <HeroEnter>{lt.enterThe}</HeroEnter>
          <HeroGameRow>
            <HeroGame>{lt.gameWorld}</HeroGame>
            <HeroWorld>WORLD</HeroWorld>
          </HeroGameRow>

          <HeroBtns>
            <BtnRed type="button" onClick={() => go('characters')}>
              {lt.playNow}
            </BtnRed>
            <BtnGhost type="button" onClick={() => go('characters')}>
              {lt.characters}
            </BtnGhost>
          </HeroBtns>
        </HeroContent>
      </HeroWrap>

      {/* ✅ composition section like screenshot */}
      <CompositionZone id="characters">
        {/* layered magical backgrounds */}
        <MagicBg src={ASSETS.backHogwarts} alt="Hogwarts Castle" $side="right" />
        <MagicBg src={ASSETS.backPlane} alt="Star Wars Plane" $side="left" />

        <CompositionTopFade aria-hidden="true" />

        <CompositionInner>
          <CompositionRow>
            <CompositionChar>
              <CharFog />
              <CharParticleLayer>
                {vaderParticles.map((p) => (
                  <Particle key={p.key} $x={p.x} $size={p.size} $delay={p.delay} $duration={p.duration} />
                ))}
              </CharParticleLayer>

              <CompositionImg
                src={ASSETS.vaderFull}
                alt="Darth Vader"
                $glow="#ff2020"
                loading="lazy"
                decoding="async"
              />
              <CompositionTitle>{lt.vaderTitle ?? 'Darth Vader'}</CompositionTitle>
              <CompositionDesc>
                {(lt.vaderDesc ?? '')} {lt.vaderWeapon ?? ''}
              </CompositionDesc>
            </CompositionChar>

            <CompositionChar>
              <CharFog />
              <CharParticleLayer>
                {harryParticles.map((p) => (
                  <Particle key={p.key} $x={p.x} $size={p.size} $delay={p.delay} $duration={p.duration} />
                ))}
              </CharParticleLayer>

              <CompositionImg
                src={ASSETS.potterFull}
                alt="Harry Potter"
                $glow="#f5c542"
                loading="lazy"
                decoding="async"
              />
              <CompositionTitle>{lt.harryTitle ?? 'Harry Potter'}</CompositionTitle>
              <CompositionDesc>
                {(lt.harryDesc ?? '')} {lt.harryWeapon ?? ''}
              </CompositionDesc>
            </CompositionChar>
          </CompositionRow>

          <CompositionWeapons>
            {/* saber hover swap (optional) */}
            <div
              onMouseEnter={() => setSaberHovered(true)}
              onMouseLeave={() => setSaberHovered(false)}
              style={{ position: 'relative' }}
            >
              <CompositionWeapon
                src={ASSETS.saber}
                alt="Darth Vader lightsaber"
                $glow="#ff2020"
                $h={120}
                style={{ opacity: saberHovered ? 0 : 1 }}
              />
              <CompositionWeapon
                src={ASSETS.saberLight}
                alt="Darth Vader lightsaber (lit)"
                $glow="#ff2020"
                $h={120}
                style={{ position: 'absolute', inset: 0, opacity: saberHovered ? 1 : 0 }}
              />
            </div>

            {/* wand hover swap (optional) */}
            <div
              onMouseEnter={() => setWandHovered(true)}
              onMouseLeave={() => setWandHovered(false)}
              style={{ position: 'relative' }}
            >
              <CompositionWeapon
                src={ASSETS.wand}
                alt="Harry Potter wand"
                $glow="#f5c542"
                $h={90}
                style={{ opacity: wandHovered ? 0 : 1 }}
              />
              <CompositionWeapon
                src={ASSETS.wandLight}
                alt="Harry Potter wand (lit)"
                $glow="#f5c542"
                $h={90}
                style={{ position: 'absolute', inset: 0, opacity: wandHovered ? 1 : 0 }}
              />
            </div>
          </CompositionWeapons>

          <CompositionChoose>CHOOSE ONE</CompositionChoose>
        </CompositionInner>

        <CompositionFade aria-hidden="true" />
      </CompositionZone>

      <HPVaderCarousel />

      <FooterWrap id="contact">
        <FooterLine />

        <FooterCharLeft>
          <img src={ASSETS.potterPart2} alt="" aria-hidden="true" />
        </FooterCharLeft>
        <FooterCharRight>
          <img src={ASSETS.vaderPart2} alt="" aria-hidden="true" />
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
