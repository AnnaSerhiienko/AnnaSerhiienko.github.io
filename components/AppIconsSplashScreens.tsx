import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Wrapper = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(236, 254, 255, 0.6));
  padding-bottom: ${({ theme }) => theme.spacing[16]};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const HeaderInner = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.slate[900]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.purple};
  }
`;

const HeaderTag = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.slate[400]};
`;

const Hero = styled.section`
  padding: ${({ theme }) => theme.spacing[14]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[10]};
  text-align: center;
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brand.purple};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  color: ${({ theme }) => theme.colors.slate[900]};
  margin: 0 0 ${({ theme }) => theme.spacing[6]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['6xl']};
  }
`;

const Lead = styled.p`
  max-width: 560px;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.slate[500]};
  margin: 0 auto;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[6]};
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const SectionLine = styled.div<{ $light?: boolean }>`
  width: 48px;
  height: 1px;
  background: ${({ theme, $light }) => ($light ? theme.colors.white : theme.colors.slate[900])};
`;

const SectionTitle = styled.h2<{ $light?: boolean }>`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  color: ${({ theme, $light }) => ($light ? theme.colors.white : theme.colors.slate[900])};
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const IconCard = styled.div`
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
`;

const IconFrame = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radii['3xl']};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.slate[100]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radii['2xl']};
`;

const IconLabel = styled.p`
  margin: ${({ theme }) => theme.spacing[4]} 0 0;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.slate[600]};
`;

const CarouselSection = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[10]};
  background: linear-gradient(180deg, #020617, #0f172a, #020617);
  overflow: hidden;
`;

const CarouselBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.95) 60%);
`;

const CarouselShell = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 20px;
`;

const CarouselViewport = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]};
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselSlide = styled.div`
  flex: 0 0 clamp(160px, 20vw, 240px);
  scroll-snap-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: 0 0 clamp(140px, 55vw, 200px);
  }
`;

const CarouselCard = styled.div`
  aspect-ratio: 9 / 16;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  overflow: hidden;
  background: #0f172a;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
`;

const CarouselMedia = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CarouselCaption = styled.p`
  margin-top: ${({ theme }) => theme.spacing[3]};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: rgba(226, 232, 240, 0.8);
`;

const CarouselButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ $position }) => ($position === 'left' ? 'left: -12px;' : 'right: -12px;')}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  backdrop-filter: blur(12px);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const FullComposition = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
`;

const CompositionCard = styled.div`
  border-radius: ${({ theme }) => theme.radii['4xl']};
  overflow: hidden;
  background: linear-gradient(135deg, rgba(196, 181, 253, 0.4), rgba(253, 242, 248, 0.5), rgba(191, 219, 254, 0.6));
  padding: ${({ theme }) => theme.spacing[8]};
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[12]};
  }
`;

const CompositionImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.slate[100]};
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors.slate[400]};
`;

const FooterLink = styled.button`
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.slate[900]};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.purple};
  }
`;

interface AppIconsSplashScreensProps {
  onBack?: () => void;
}

const iconItems = [
  {
    src: './assets/images/brand/app-icons-splash-screens/icons/elemental-quest-alt.png',
    label: 'Elemental Quest — Alt Icon',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/icons/monstrous-evorise-icon.png',
    label: 'Monstrous Evorise',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/icons/cat-wars.png',
    label: 'Cat Wars',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/icons/fatty-fish.png',
    label: 'Fatty Fish',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/icons/feed-me.png',
    label: 'Feed Me',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/icons/elemental-quest.png',
    label: 'Elemental Quest',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/icons/revback.png',
    label: 'RevBack',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/icons/selara.png',
    label: 'Selara',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/icons/sky-hero-icon.png',
    label: 'Sky Hero',
  },
];

const splashItems = [
  {
    src: './assets/images/brand/app-icons-splash-screens/splash-screens/cat-wars.png',
    label: 'Cat Wars',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/splash-screens/elemental-craft.png',
    label: 'Elemental Craft',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/splash-screens/elemental-quest.png',
    label: 'Elemental Quest',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/splash-screens/fatty-fish.png',
    label: 'Fatty Fish',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/splash-screens/feed-me.png',
    label: 'Feed Me',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/splash-screens/monstrous-evorise.png',
    label: 'Monstrous Evorise',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/splash-screens/revback.png',
    label: 'RevBack',
  },
  {
    src: './assets/images/brand/app-icons-splash-screens/splash-screens/selara.png',
    label: 'Selara',
  },
];

const AppIconsSplashScreens: React.FC<AppIconsSplashScreensProps> = ({ onBack }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    window.location.hash = '#work';
  };

  const scrollBySlide = (direction: number) => {
    const viewport = carouselRef.current;
    if (!viewport) return;
    const firstSlide = viewport.querySelector<HTMLElement>('[data-slide]');
    if (!firstSlide) return;
    const styles = getComputedStyle(viewport);
    const gap = parseFloat(styles.columnGap || styles.gap || '0');
    const amount = firstSlide.getBoundingClientRect().width + gap;
    viewport.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => scrollBySlide(1), 2800);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Wrapper>
      <Header>
        <HeaderInner>
          <BackButton onClick={handleBack} aria-label="Back to portfolio">
            <ArrowLeft size={18} />
            Back to Portfolio
          </BackButton>
          <HeaderTag>Brand Design</HeaderTag>
        </HeaderInner>
      </Header>

      <Hero>
        <Container>
          <Eyebrow>Mobile Branding</Eyebrow>
          <Title>
            App Icons & <em>Splash Screens</em>
          </Title>
          <Lead>
            A collection of vibrant app icons and splash screens designed for mobile applications,
            featuring playful characters and bold visual identities.
          </Lead>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionHeader>
            <SectionLine />
            <SectionTitle>App Icons</SectionTitle>
          </SectionHeader>

          <IconGrid>
            {iconItems.map((icon) => (
              <IconCard key={icon.label}>
                <IconFrame>
                  <IconImage src={icon.src} alt={icon.label} />
                </IconFrame>
                <IconLabel>{icon.label}</IconLabel>
              </IconCard>
            ))}
          </IconGrid>
        </Container>
      </Section>

      <CarouselSection>
        <CarouselBackdrop />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader>
            <SectionLine $light />
            <SectionTitle $light>Splash Screens</SectionTitle>
          </SectionHeader>
        </Container>

        <CarouselShell>
          <CarouselViewport
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {splashItems.map((item) => (
              <CarouselSlide key={item.label} data-slide>
                <CarouselCard>
                  <CarouselMedia src={item.src} alt={item.label} loading="lazy" />
                </CarouselCard>
                <CarouselCaption>{item.label}</CarouselCaption>
              </CarouselSlide>
            ))}
          </CarouselViewport>

          <CarouselButton $position="left" onClick={() => scrollBySlide(-1)} aria-label="Previous">
            <ArrowLeft size={18} />
          </CarouselButton>
          <CarouselButton $position="right" onClick={() => scrollBySlide(1)} aria-label="Next">
            <ArrowRight size={18} />
          </CarouselButton>
        </CarouselShell>
      </CarouselSection>

      <FullComposition>
        <Container>
          <SectionHeader>
            <SectionLine />
            <SectionTitle>Full Composition</SectionTitle>
          </SectionHeader>
          <CompositionCard>
            <CompositionImage
              src="./assets/images/brand/app-icons-splash-screens/full-composition.png"
              alt="App Icons & Splash Screens Full Composition"
            />
          </CompositionCard>
        </Container>
      </FullComposition>

      <Footer>
        <FooterInner>
          <FooterText>© {year} Anna Serhiienko. All rights reserved.</FooterText>
          <FooterLink onClick={handleBack}>
            View More Projects
            <ArrowRight size={16} />
          </FooterLink>
        </FooterInner>
      </Footer>
    </Wrapper>
  );
};

export default AppIconsSplashScreens;
