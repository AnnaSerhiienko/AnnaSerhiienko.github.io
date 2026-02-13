import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ArrowLeft, Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';
import HPVaderCarousel from './HPVaderCarousel.tsx';

const A = '/assets/images/brand/Lending Harry Potter vs Darth_Vader';
// Cache-bust so updated image is fetched by browsers after you replace the file
const BACK_HOGWARTS  = `${A}/Back_Hogwarts.png?v=${new Date().getTime()}`;
const BACK_PLANE     = `${A}/Back_plane.png`;
const VADER_FULL     = `${A}/Darth_Vader_full height.png`;
const VADER_PART2    = `${A}/Darth_Vader_part_2.png`;
const POTTER_FULL    = `${A}/Harry_Potter_full_height.png`;
const POTTER_PART1   = `${A}/Harry_Potter_part_1.png`;
const CANDLE           = `${A}/Candle.png`;
const POTTER_PART2   = `${A}/Harry_Potter_part_2.png`;
const LOGO           = `${A}/Property 1=Default.svg`;
const HERO_VIDEO     = `${A}/Video Hero.mp4`;
const WAND           = `${A}/Harry Potter's wand.png`;
const WAND_LIGHT     = `${A}/Harry Potter's wand_light.png`;
const LIGHTSABER_LIGHT = `${A}/Darth_Vader's_lightsaber_light.png`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(50px) }
  to   { opacity: 1; transform: translateY(0) }
`;
const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`;
const slideFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-80px) }
  to   { opacity: 1; transform: translateX(0) }
`;
const slideFromRight = keyframes`
  from { opacity: 0; transform: translateX(80px) }
  to   { opacity: 1; transform: translateX(0) }
`;
const float = keyframes`
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-12px) }
`;
const saberGlow = keyframes`
  0%, 100% { opacity: 0.5; filter: blur(4px) }
  50%      { opacity: 1;   filter: blur(8px) }
`;
const particleDrift = keyframes`
  0%   { transform: translateY(0) rotate(0deg); opacity: 0 }
  10%  { opacity: 1 }
  90%  { opacity: 1 }
  100% { transform: translateY(-100vh) rotate(720deg); opacity: 0 }
`;

const BG = '#1a2238';

const Page = styled.div`
  min-height: ${nonTokenValues.layout.fullViewportHeight};
  background: ${BG};
  color: #fff;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
`;
const BackBtn = styled.button`
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(0,0,0,.35); backdrop-filter: blur(14px);
  padding: 10px 22px; border-radius: 999px;
  font-size: 14px; font-weight: 500;
  color: rgba(255,255,255,.7); cursor: pointer;
  transition: all .3s;
  &:hover { background: rgba(0,0,0,.55); color: #fff }
`;
const Nav = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 48px; height: 72px;
  background: rgba(26,34,56,.55);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,.08);
  @media(max-width: 900px) {
    padding: 0 16px;
  }
  @media(max-width: 768px) {
    padding: 0 8px;
  }
`;
const NavLogo = styled.img`
  height: 28px; width: auto; opacity: 1;
  @media(max-width: 768px) {
    margin: 12px 0 12px 0;
    display: block;
  }
`;
const NavLinks = styled.div`
  display: flex; gap: 36px;
  @media(max-width: 900px) {
    gap: 18px;
  }
  @media(max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled.span<{ $active?: boolean }>`
  font-family: 'Gideon Roman', serif;
  font-size: 16px; cursor: pointer;
  color: ${p => p.$active ? '#fff' : 'rgba(255,255,255,.6)'};
  text-decoration: none;
  position: relative;
  border-radius: 8px;
  transition: color .2s, box-shadow .2s;
  outline: none;
  &:hover, &:focus {
    color: #ff2222;
    outline: none;
  }
`;
const NavPlayBtn = styled.button`
  padding: 12px 28px; border: none; border-radius: 999px;
  background: #7a1a1a; color: #fff;
  font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600;
  cursor: pointer; transition: all .3s;
  &:hover { background: #9a2222; box-shadow: 0 4px 28px rgba(120,20,20,.5) }
  @media(max-width: 768px) {
    display: none;
  }
`;

const DrawerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  padding: 8px;
  cursor: pointer;
  z-index: 300;
  @media(max-width: 768px) {
    display: block;
  }
`;

const DrawerOverlay = styled.div`
  display: none;
  @media(max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 299;
    animation: ${fadeIn} 0.2s;
  }
`;

const Drawer = styled.div`
  display: none;
  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0; right: 0;
    width: 80vw; max-width: 320px; height: 100vh;
    background: rgba(26,34,56,0.98);
    box-shadow: -2px 0 24px 0 rgba(0,0,0,0.18);
    z-index: 300;
    padding: 32px 24px 24px 24px;
    animation: ${fadeIn} 0.2s;
  }
`;

const DrawerClose = styled.button`
  background: none;
  border: none;
  color: #fff;
  position: absolute;
  top: 18px; right: 18px;
  font-size: 28px;
  cursor: pointer;
`;
const HeroWrap = styled.section`
  position: relative; width: 100%; height: 100vh;
  min-height: 640px; overflow: hidden;
  margin-top: 72px;
  @media(max-width:768px){ margin-top: 60px }
`;
const HeroVideo = styled.video`
  position: absolute; inset: 0;
  width: 100%; height: 100%; object-fit: cover; z-index: 0;
`;
const HeroOverlay = styled.div`
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(
    to top,
    ${BG} 0%,
    rgba(26,34,56,.6) 30%,
    rgba(26,34,56,.15) 60%,
    rgba(26,34,56,.05) 100%
  );
`;
const HeroChar = styled.div`
    display: none;
`;
const HeroContent = styled.div`
  position: absolute; bottom: 0; left: 0; z-index: 3;
  padding: 0 48px 88px;
  animation: ${fadeInUp} 1s ease-out .6s both;
  @media(max-width:768px){ padding: 0 24px 56px }
`;
const HeroEnter = styled.div`
  font-family: 'Katibeh', cursive; font-size: 64px;
  line-height: 1; color: rgba(255,255,255,.9); margin-bottom: -10px;
  @media(max-width:768px){ font-size: 40px; margin-bottom: -6px }
`;
const HeroGameRow = styled.div`
  display: flex; align-items: baseline; gap: 14px;
`;
const HeroGame = styled.h1`
  font-family: 'Katibeh', cursive; font-size: 164px;
  font-weight: 400; line-height: .9; color: #fff; margin: 0;
  @media(max-width:1024px){ font-size: 120px }
  @media(max-width:768px) { font-size: 80px  }
  @media(max-width:480px) { font-size: 56px  }
`;
const HeroWorld = styled.span`
  font-family: 'Katibeh', cursive; font-size: 64px;
  color: rgba(255,255,255,.8);
  @media(max-width:768px){ font-size: 40px }
`;
const HeroBtns = styled.div`
  display: flex; gap: 16px;
  /* lift buttons up toward the heading without moving the heading itself */
  margin-top: -40px;
  @media(max-width:768px){ margin-top: -20px }
  @media(max-width:480px){ margin-top: -12px }
`;
const BtnRed = styled.button`
  padding: 14px 38px; border: none; border-radius: 999px;
  background: #7a1a1a; color: #fff;
  font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600;
  cursor: pointer; transition: all .3s;
  &:hover { background: #9a2222; transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(120,20,20,.5) }
  @media(max-width:480px){ padding: 12px 28px; font-size: 14px }
`;
const BtnGhost = styled.button`
  padding: 14px 38px;
  border: 1px solid rgba(255,255,255,.22); border-radius: 999px;
  background: rgba(255,255,255,.04); color: #fff;
  font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500;
  cursor: pointer; transition: all .3s;
  &:hover { background: rgba(255,255,255,.1);
    border-color: rgba(255,255,255,.4) }
  @media(max-width:480px){ padding: 12px 28px; font-size: 14px }
`;
const CharSection = styled.section<{ $reverse?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 80px 48px;
  overflow: hidden;
  flex-direction: ${p => p.$reverse ? 'row-reverse' : 'row'};
  background: ${BG};
  @media(max-width:900px){
    flex-direction: column; padding: 60px 24px; min-height: auto;
  }
  &.harry-bg::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 0;
    background: url(${BACK_HOGWARTS}) left center / contain no-repeat;
    opacity: 0.32;
    pointer-events: none;
  }
  &.vader-bg::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 0;
    background: url(${BACK_PLANE}) right center / contain no-repeat;
    opacity: 0.18;
    pointer-events: none;
  }
`;
const CharBgImage = styled.div<{ $src: string; $side: 'left' | 'right' }>`
  position: absolute;
  ${p => p.$side}: 0; top: 0;
  width: 55%; height: 100%;
  opacity: .12; pointer-events: none;
  background: url(${p => p.$src}) center / cover no-repeat;
  mask-image: linear-gradient(to ${p => p.$side === 'left' ? 'right' : 'left'}, black 30%, transparent);
  -webkit-mask-image: linear-gradient(to ${p => p.$side === 'left' ? 'right' : 'left'}, black 30%, transparent);
`;
const CharImg = styled.div<{ $visible: boolean; $highlight?: string }>`
  flex: 0 0 45%; display: flex;
  justify-content: center; align-items: flex-end;
  z-index: 2;
  opacity: ${p => p.$visible ? 1 : 0};
  transform: translateY(${p => p.$visible ? 0 : '50px'});
  transition: opacity .8s ease-out, transform .8s ease-out;
  position: relative;
  img {
    max-height: 85vh; width: auto; max-width: 100%;
    object-fit: contain;
    filter: drop-shadow(0 20px 60px rgba(0,0,0,.4));
    animation: ${float} 5s ease-in-out infinite;
    transition: filter .3s, transform .3s;
  }
  &:hover img {
    transform: scale(1.05);
    filter:
      drop-shadow(0 0 0 ${p => p.$highlight || '#fff'})
      drop-shadow(0 0 12px ${p => p.$highlight || '#fff'})
      drop-shadow(0 0 24px ${p => p.$highlight || '#fff'});
  }
  .candles {
    position: absolute;
    left: 10%; bottom: 12%;
    display: flex; gap: 12px;
    z-index: 2;
  }
  @media(max-width:900px){
    flex: none; margin-bottom: 32px;
    img { max-height: 50vh }
  }
`;
const CharText = styled.div<{ $visible: boolean }>`
  flex: 1; z-index: 1;
  padding: 0 48px;
  opacity: ${p => p.$visible ? 1 : 0};
  transform: translateX(${p => p.$visible ? 0 : '40px'});
  transition: opacity .8s ease-out .2s, transform .8s ease-out .2s;
  @media(max-width:900px){ padding: 0; text-align: center;
    transform: translateX(0) translateY(${p => p.$visible ? 0 : '30px'}) }
`;
const CharTitle = styled.h2`
  font-family: 'Gideon Roman', serif;
  font-size: 36px; font-weight: 400; margin: 0 0 20px;
  color: #fff;
`;

const WandImage = styled.img`
  display: block;
  margin: 0 0 40px 0; /* move left by removing auto left margin */
  width: 320px;
  max-width: 100%;
  height: auto;
  transition: filter 0.4s, box-shadow 0.4s;
  cursor: pointer;
  @media(max-width:900px){ width: 180px; margin-bottom: 24px; }
  @media(max-width:768px){ display: none !important; }
`;
const WandImageWrap = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto 32px auto;
  position: relative;
  width: 100%;
`;

const CharDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px; line-height: 1.8;
  color: rgba(255,255,255,.6); max-width: 480px;
  @media(max-width:900px){ margin: 0 auto }
`;
const SaberAccent = styled.div<{ $color: string }>`
  width: 60px; height: 3px; border-radius: 2px;
  margin-bottom: 24px;
  background: ${p => p.$color};
  box-shadow: 0 0 12px ${p => p.$color}, 0 0 24px ${p => p.$color}44;
  animation: ${saberGlow} 3s ease-in-out infinite;
  @media(max-width:900px){ margin: 0 auto 24px }
`;
const Particle = styled.div<{ $x: number; $delay: number; $size: number }>`
  position: absolute;
  left: ${p => p.$x}%;
  bottom: -10px;
  width: ${p => p.$size}px; height: ${p => p.$size}px;
  border-radius: 50%;
  background: rgba(255,255,255,.15);
  animation: ${particleDrift} ${() => 8 + Math.random() * 6}s linear infinite;
  animation-delay: ${p => p.$delay}s;
`;
const FooterWrap = styled.footer`
  position: relative; background: ${BG};
  padding: 0 48px 36px; overflow: hidden;
  @media(max-width:768px){ padding: 0 20px 28px }
`;
const FooterLine = styled.div`
  width: 100%; height: 1px;
  background: rgba(255,255,255,.12);
  margin-bottom: 48px;
`;
const FooterGrid = styled.div`
  position: relative; z-index: 1;
  display: flex; justify-content: space-between;
  flex-wrap: wrap; gap: 40px;
  max-width: 1100px; margin: 0 auto;
  @media(max-width:640px){ gap: 28px }
`;
const FooterBrand = styled.div`
  max-width: 200px; flex-shrink: 0;
`;
const FooterBrandTitle = styled.h3`
  font-family: 'Gideon Roman', serif;
  font-size: 36px; font-weight: 400;
  color: #fff; margin: 0 0 4px;
  letter-spacing: 3px;
`;
const FooterBrandSub = styled.p`
  font-size: 14px; color: rgba(255,255,255,.35);
  margin: 0 0 20px;
`;
const SocialRow = styled.div`
  display: flex; gap: 12px;
`;
const SocialCircle = styled.a`
  width: 34px; height: 34px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,.18);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.5); transition: all .2s;
  text-decoration: none;
  &:hover { border-color: rgba(255,255,255,.4); color: #fff }
  svg { width: 15px; height: 15px }
`;
const FooterCol = styled.div`
  min-width: 120px;
`;
const FooterColTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 16px; font-weight: 600;
  color: #fff; margin: 0 0 16px;
`;
const FooterLink = styled.a`
  display: block; font-size: 14px;
  color: rgba(255,255,255,.4); text-decoration: none;
  margin-bottom: 12px; cursor: pointer;
  transition: color .2s;
  &:hover { color: rgba(255,255,255,.8) }
`;
const FooterCharLeft = styled.div`
  position: absolute; left: 0; bottom: 0;
  height: 320px; z-index: 0; pointer-events: none;
  opacity: .7;
  img { height: 100%; width: auto; object-fit: contain;
        object-position: bottom left }
  @media(max-width:768px){ height: 200px }
`;
const FooterCharRight = styled.div`
  position: absolute; right: 0; bottom: 0;
  height: 320px; z-index: 0; pointer-events: none;
  opacity: .7;
  img { height: 100%; width: auto; object-fit: contain;
        object-position: bottom right }
  @media(max-width:768px){ height: 200px }
`;
const FooterBottom = styled.div`
  position: relative; z-index: 1;
  display: flex; justify-content: space-between;
  max-width: 1100px; margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.06);
  font-size: 12px; color: rgba(255,255,255,.2);
  @media(max-width:640px){ flex-direction: column; gap: 6px; text-align: center }
`;

interface Props { onBack: () => void }

const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const LandingHPvsVader: React.FC<Props> = ({ onBack }) => {
  const [selected, setSelected] = useState<'harry' | 'vader' | null>(null);
  const [wandHovered, setWandHovered] = useState(false);
  const [saberHovered, setSaberHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useLanguage();
  const lt: any = t.landingHpVsVader; // Use any to allow harryWeapon/vaderWeapon

  const harry = useInView(0.15);
  const vader = useInView(0.15);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    x: Math.random() * 100,
    delay: Math.random() * 8,
    size: 2 + Math.random() * 3,
    key: i,
  }));

  return (
    <Page>
      <Nav>
      <BackBtn onClick={onBack}>
        <ArrowLeft size={16} />
        {lt.backToPortfolio}
      </BackBtn>
        <NavLinks>
          <NavLink $active>{lt.navHome}</NavLink>
          <NavLink>{lt.navGame}</NavLink>
          <NavLink>{lt.navContact}</NavLink>
        </NavLinks>
        <NavPlayBtn>{lt.playNow}</NavPlayBtn>
        <DrawerButton aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
          <MenuIcon size={28} />
        </DrawerButton>
        {drawerOpen && <>
          <DrawerOverlay onClick={() => setDrawerOpen(false)} />
          <Drawer>
            <DrawerClose aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
              <CloseIcon size={28} />
            </DrawerClose>
            <NavLink style={{margin: '32px 0 0 0', fontSize: 20}} $active>{lt.navHome}</NavLink>
            <NavLink style={{margin: '18px 0 0 0', fontSize: 20}}>{lt.navGame}</NavLink>
            <NavLink style={{margin: '18px 0 0 0', fontSize: 20}}>{lt.navContact}</NavLink>
            <NavPlayBtn style={{display: 'block', margin: '32px 0 0 0', width: '100%'}}>{lt.playNow}</NavPlayBtn>
          </Drawer>
        </>}
      </Nav>
      <HeroWrap>
        <HeroVideo src={HERO_VIDEO} autoPlay loop muted playsInline />
        <HeroOverlay />
        <HeroContent>
          <HeroEnter>{lt.enterThe}</HeroEnter>
          <HeroGameRow>
            <HeroGame>{lt.gameWorld}</HeroGame>
            <HeroWorld>WORLD</HeroWorld>
          </HeroGameRow>
          <HeroBtns>
            <BtnRed onClick={() => setSelected('harry')}>{lt.playNow}</BtnRed>
            <BtnGhost onClick={() => setSelected('vader')}>{lt.characters}</BtnGhost>
          </HeroBtns>
        </HeroContent>
      </HeroWrap>
      <CharSection ref={harry.ref} style={{position:'relative', overflow:'visible'}}>
        <img
          src={BACK_HOGWARTS}
          alt="Hogwarts Castle"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'right bottom',
            zIndex: 1,
            opacity: 0.48,
            pointerEvents: 'none',
          }}
        />
        {particles.map(p => (
          <Particle key={p.key} $x={p.x} $delay={p.delay} $size={p.size} />
        ))}
        <CharText $visible={harry.visible}>
          <WandImageWrap>
            <WandImage
              src={wandHovered ? WAND_LIGHT : WAND}
              alt="Harry Potter's wand"
              onMouseEnter={() => setWandHovered(true)}
              onMouseLeave={() => setWandHovered(false)}
              style={{ transition: 'filter 0.4s, box-shadow 0.4s' }}
            />
          </WandImageWrap>
          <CharTitle>{lt.harryTitle}</CharTitle>
           <CharDesc>{lt.harryDesc} {lt.harryWeapon ?? ''}</CharDesc>
        </CharText>
        <CharImg $visible={harry.visible} $highlight="#f5c542">
          <img src={POTTER_FULL} alt="Harry Potter" />
        </CharImg>
      </CharSection>
      <CharSection $reverse ref={vader.ref} style={{position:'relative', overflow:'visible', marginTop: '-100px'}}>
        <img
          src={BACK_PLANE}
          alt="Plane Background"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '65%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.48,
            pointerEvents: 'none',
          }}
        />
        {particles.map(p => (
          <Particle key={`v${p.key}`} $x={p.x} $delay={p.delay} $size={p.size} />
        ))}
        <CharText $visible={vader.visible}>
          <div
            className="vader-lightsaber"
            onMouseEnter={() => setSaberHovered(true)}
            onMouseLeave={() => setSaberHovered(false)}
            style={{ position: 'relative', display: 'block', margin: '0 0 12px auto', width: 260, transform: 'translateX(-35%) translateY(-5%)', cursor: 'pointer' }}
          >
            <img
              src="/assets/images/brand/Lending Harry Potter vs Darth_Vader/Darth_Vader's_lightsaber.png"
              alt="Darth Vader lightsaber"
              style={{ width: '100%', display: 'block', transition: 'opacity .35s ease', opacity: saberHovered ? 0 : 1 }}
              className="vader-lightsaber-img"
            />
            <img
              src="/assets/images/brand/Lending Harry Potter vs Darth_Vader/Darth_Vader's_lightsaber_light.png"
              alt="Darth Vader lightsaber (light)"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', transition: 'opacity .35s ease', opacity: saberHovered ? 1 : 0 }}
              className="vader-lightsaber-img"
            />
          </div>
          <CharTitle style={{ marginLeft: 32, marginBottom: 20, display: 'block' }}>{lt.vaderTitle}</CharTitle>
          <CharDesc style={{ marginLeft: 32 }}>{lt.vaderDesc} {lt.vaderWeapon ?? ''}</CharDesc>
        </CharText>
        <CharImg $visible={vader.visible} $highlight="#ff2020">
          <img src={VADER_FULL} alt="Darth Vader" />
        </CharImg>
      </CharSection>
      <style>{`
        @media (max-width: 768px) {
          .vader-lightsaber, .vader-lightsaber-img { display: none !important; }
        }
      `}</style>
      <HPVaderCarousel />
      <FooterWrap>
        <FooterLine />
        <FooterCharLeft><img src={POTTER_PART2} alt="" /></FooterCharLeft>
        <FooterCharRight><img src={VADER_PART2} alt="" /></FooterCharRight>
        <FooterGrid>
          <FooterBrand>
            <FooterBrandTitle>{lt.footerTitle}</FooterBrandTitle>
            <FooterBrandSub>{lt.footerSubtitle}</FooterBrandSub>
            <SocialRow>
              <SocialCircle href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </SocialCircle>
              <SocialCircle href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </SocialCircle>
              <SocialCircle href="#" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
  )
}

export default LandingHPvsVader;
