import React, { useMemo } from 'react';
import Slider from 'react-slick';
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

const CarouselSlider = styled(Slider)`
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]};

  .slick-slide {
    padding: 0 8px;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-prev,
  .slick-next {
    z-index: 2;
  }

  .slick-prev:before,
  .slick-next:before {
    content: '';
  }

  .slick-slide .carousel-card {
    opacity: 0.55;
    transform: scale(0.9);
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(1.05);
    filter: drop-shadow(0 24px 50px rgba(0, 0, 0, 0.45));
    pointer-events: auto;
  }

  .slick-slide .carousel-caption {
    opacity: 0.6;
    transform: scale(0.92);
    margin-top: 10px;
    transition: transform 0.4s ease, color 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease;
  }

  .slick-center .carousel-caption {
    margin-top: 18px;
    opacity: 1;
    transform: scale(1.05);
    color: rgba(255, 255, 255, 0.98);
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

const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  backdrop-filter: blur(12px);
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

interface SlickArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: 'prev' | 'next';
}

const SlickArrow: React.FC<SlickArrowProps> = ({ className, style, onClick, direction }) => (
  <ArrowButton className={className} style={style} onClick={onClick} aria-label={direction === 'next' ? 'Next' : 'Previous'}>
    {direction === 'next' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
  </ArrowButton>
);

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

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    window.location.hash = '#work';
  };

  const year = useMemo(() => new Date().getFullYear(), []);

  const sliderSettings = useMemo(
    () => ({
      centerMode: true,
      centerPadding: '60px',
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2800,
      pauseOnHover: true,
      arrows: true,
      nextArrow: <SlickArrow direction="next" />,
      prevArrow: <SlickArrow direction="prev" />,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, centerPadding: '40px' },
        },
        {
          breakpoint: 640,
          settings: { slidesToShow: 2, centerPadding: '20px' },
        },
      ],
    }),
    []
  );

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
          <CarouselSlider {...sliderSettings}>
            {splashItems.map((item) => (
              <div key={item.label}>
                <CarouselCard className="carousel-card">
                  <CarouselMedia src={item.src} alt={item.label} loading="lazy" />
                </CarouselCard>
                <CarouselCaption className="carousel-caption">{item.label}</CarouselCaption>
              </div>
            ))}
          </CarouselSlider>
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
