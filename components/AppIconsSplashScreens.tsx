import React, { useMemo, useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import { DESIGNER_NAME } from '../constants.ts';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';
const ASSET_BASE_URL = '/assets';

const Wrapper = styled.section`
  min-height: ${nonTokenValues.layout.fullViewportHeight};
  background: ${nonTokenValues.effects.appIconsBackground};
  padding-bottom: ${({ theme }) => theme.spacing[16]};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${nonTokenValues.zIndex.stickyHeader};
  background: ${nonTokenValues.effects.glassWhite70};
  backdrop-filter: blur(${nonTokenValues.effects.blurStrong});
  border-bottom: ${nonTokenValues.sizing.hairline} solid ${nonTokenValues.effects.overlayWhite40};
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
  max-width: ${nonTokenValues.layout.appIconsHeroLeadMaxWidth};
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
  width: ${({ theme }) => theme.spacing[9]};
  height: ${nonTokenValues.sizing.hairline};
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
    transform: translateY(${nonTokenValues.motion.iconLift}) scale(${nonTokenValues.motion.scaleHover});
  }
`;

const IconFrame = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radii['3xl']};
  background: ${({ theme }) => theme.colors.white};
  border: ${nonTokenValues.sizing.hairline} solid ${({ theme }) => theme.colors.slate[100]};
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
  background: ${nonTokenValues.effects.carouselBackground};
  overflow: hidden;
`;

const CarouselBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: ${nonTokenValues.effects.carouselBackdrop};
`;

const CarouselShell = styled.div`
  position: relative;
  width: ${nonTokenValues.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${nonTokenValues.sizing.carouselShellPadding};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`;

const CarouselSlider = styled(Slider)`
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]};

  .slick-slide {
    padding: ${nonTokenValues.sizing.carouselSlidePadding};
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
    z-index: 5;
    top: 50%;
    width: ${({ theme }) => theme.spacing[8]};
    height: ${({ theme }) => theme.spacing[8]};
  }

  .slick-prev {
    left: ${({ theme }) => theme.spacing[4]};
  }

  .slick-next {
    right: ${({ theme }) => theme.spacing[4]};
  }

  .slick-prev:before,
  .slick-next:before {
    content: '';
  }

  .slick-slide .carousel-card {
    opacity: ${nonTokenValues.effects.carouselCardOpacity};
    transform: scale(${nonTokenValues.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${nonTokenValues.motion.scaleActive});
    filter: ${nonTokenValues.effects.carouselDropShadow};
    pointer-events: auto;
  }

  .slick-slide .carousel-caption {
    opacity: 0.4;
    transform: scale(0.9);
    margin-top: ${({ theme }) => theme.spacing[4]};
    transition: transform 0.4s ease, color 0.4s ease, opacity 0.4s ease;
  }

  .slick-center .carousel-caption {
    opacity: 1;
    transform: scale(1);
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;

    .slick-list {
      overflow: hidden;
    }

    .slick-slide {
      padding: ${nonTokenValues.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${nonTokenValues.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;

const CarouselCard = styled.div`
  aspect-ratio: 9 / 16;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.slate[900]};
  box-shadow: ${nonTokenValues.effects.carouselCardShadow};
  cursor: pointer;
`;

const CarouselMedia = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CarouselCaption = styled.p`
  margin-top: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${nonTokenValues.effects.carouselCaptionMuted};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
`;

const ArrowButton = styled.button`
  width: ${({ theme }) => theme.spacing[8]};
  height: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radii.full};
  border: ${nonTokenValues.sizing.hairline} solid ${nonTokenValues.effects.glassWhite20};
  background: ${nonTokenValues.effects.glassWhite10};
  color: ${({ theme }) => theme.colors.white};
  backdrop-filter: blur(${nonTokenValues.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${nonTokenValues.effects.glassWhite20};
  }
`;

interface SlickArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: 'prev' | 'next';
  ariaLabel: string;
}

const SlickArrow: React.FC<SlickArrowProps> = ({ className, style, onClick, direction, ariaLabel }) => (
  <ArrowButton className={className} style={style} onClick={onClick} aria-label={ariaLabel}>
    {direction === 'next' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
  </ArrowButton>
);

const FullComposition = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
`;

const CompositionCard = styled.div`
  border-radius: ${({ theme }) => theme.radii['4xl']};
  overflow: hidden;
  background: ${nonTokenValues.effects.compositionGradient};
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
  border-top: ${nonTokenValues.sizing.hairline} solid ${({ theme }) => theme.colors.slate[100]};
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

const iconSources = [
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/icons/elemental-quest-alt.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/icons/monstrous-evorise-icon.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/icons/cat-wars.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/icons/fatty-fish.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/icons/feed-me.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/icons/elemental-quest.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/icons/revback.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/icons/selara.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/icons/sky-hero-icon.png`,
];

const splashSources = [
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/splash-screens/cat-wars.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/splash-screens/elemental-craft.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/splash-screens/elemental-quest.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/splash-screens/fatty-fish.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/splash-screens/feed-me.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/splash-screens/monstrous-evorise.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/splash-screens/revback.png`,
  `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/splash-screens/selara.png`,
];

const AppIconsSplashScreens: React.FC<AppIconsSplashScreensProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const sliderRef = useRef<Slider>(null);

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    window.location.hash = '#work';
  };

  const handleSlideClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const year = useMemo(() => new Date().getFullYear(), []);

  const sliderSettings = useMemo(
    () => ({
      centerMode: true,
      centerPadding: nonTokenValues.carousel.centerPaddingLg,
      infinite: true,
      slidesToShow: nonTokenValues.carousel.slidesToShowLg,
      speed: nonTokenValues.carousel.speed,
      autoplay: true,
      autoplaySpeed: nonTokenValues.carousel.autoplaySpeed,
      pauseOnHover: true,
      arrows: true,
      nextArrow: <SlickArrow direction="next" ariaLabel={t.appIcons.next} />,
      prevArrow: <SlickArrow direction="prev" ariaLabel={t.appIcons.previous} />,
      responsive: [
        {
          breakpoint: nonTokenValues.carousel.breakpointLg,
          settings: {
            slidesToShow: nonTokenValues.carousel.slidesToShowMd,
            centerPadding: nonTokenValues.carousel.centerPaddingMd,
          },
        },
        {
          breakpoint: nonTokenValues.carousel.breakpointSm,
          settings: {
            slidesToShow: nonTokenValues.carousel.slidesToShowSm,
            slidesToScroll: nonTokenValues.carousel.slidesToScrollSm,
            centerPadding: nonTokenValues.carousel.centerPaddingSm,
            centerMode: false,
            arrows: false,
          },
        },
        {
          breakpoint: nonTokenValues.carousel.breakpointXs,
          settings: {
            slidesToShow: nonTokenValues.carousel.slidesToShowSm,
            slidesToScroll: nonTokenValues.carousel.slidesToScrollSm,
            centerPadding: nonTokenValues.carousel.centerPaddingSm,
            centerMode: false,
            arrows: false,
          },
        },
      ],
    }),
    [t]
  );

  return (
    <Wrapper>
      <Header>
        <HeaderInner>
          <BackButton onClick={handleBack} aria-label={t.appIcons.backToPortfolioAria}>
            <ArrowLeft size={18} />
            {t.appIcons.backToPortfolio}
          </BackButton>
          <HeaderTag>{t.work.categories.brandDesign}</HeaderTag>
        </HeaderInner>
      </Header>

      <Hero>
        <Container>
          <Eyebrow>{t.appIcons.eyebrow}</Eyebrow>
          <Title>
            {t.appIcons.titlePrimary} <em>{t.appIcons.titleEmphasis}</em>
          </Title>
          <Lead>
            {t.appIcons.lead}
          </Lead>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionHeader>
            <SectionLine />
            <SectionTitle>{t.appIcons.appIconsTitle}</SectionTitle>
          </SectionHeader>

          <IconGrid>
            {iconSources.map((src, index) => (
              <IconCard key={src}>
                <IconFrame>
                  <IconImage src={src} alt={t.appIcons.iconLabels[index]} />
                </IconFrame>
                <IconLabel>{t.appIcons.iconLabels[index]}</IconLabel>
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
            <SectionTitle $light>{t.appIcons.splashScreensTitle}</SectionTitle>
          </SectionHeader>
        </Container>

        <CarouselShell>
          <CarouselSlider ref={sliderRef} {...sliderSettings}>
            {splashSources.map((src, index) => (
              <div key={src} onClick={() => handleSlideClick(index)}>
                <CarouselCard className="carousel-card">
                  <CarouselMedia src={src} alt={t.appIcons.splashLabels[index]} loading="lazy" />
                </CarouselCard>
                <CarouselCaption className="carousel-caption">{t.appIcons.splashLabels[index]}</CarouselCaption>
              </div>
            ))}
          </CarouselSlider>
        </CarouselShell>
      </CarouselSection>

      <Footer>
        <FooterInner>
          <FooterText>© {year} {DESIGNER_NAME}. {t.appIcons.footerRights}</FooterText>
          <FooterLink onClick={handleBack}>
            {t.appIcons.viewMoreProjects}
            <ArrowRight size={16} />
          </FooterLink>
        </FooterInner>
      </Footer>
    </Wrapper>
  );
};

export default AppIconsSplashScreens;
