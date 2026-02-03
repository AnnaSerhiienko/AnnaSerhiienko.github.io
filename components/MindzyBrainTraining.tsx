import React, { useMemo } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';

const ASSET_BASE_URL = '/assets';
const VIDEO_BASE = `${ASSET_BASE_URL}/video/Mindzy – Brain Training`;
const HERO_COVER = `${ASSET_BASE_URL}/images/brand/Mindzy – Brain Training/UI/2_Full_Composition_Mindzy – Brain Training.png`;

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

const Hero = styled.section<{ $coverUrl: string }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing[14]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[10]};
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${({ $coverUrl }) => $coverUrl});
    background-size: cover;
    background-position: center;
    opacity: 0.35;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: ${nonTokenValues.zIndex.foreground};
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

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const SectionLine = styled.div`
  width: ${({ theme }) => theme.spacing[9]};
  height: ${nonTokenValues.sizing.hairline};
  background: ${({ theme }) => theme.colors.slate[900]};
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.slate[900]};
`;


const CarouselSection = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
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
    opacity: ${nonTokenValues.effects.carouselCaptionOpacity};
    transform: scale(${nonTokenValues.motion.scaleCaptionDown});
    margin-top: ${nonTokenValues.sizing.carouselCaptionOffsetSm};
    transition: transform 0.4s ease, color 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease;
  }

  .slick-center .carousel-caption {
    margin-top: ${nonTokenValues.sizing.carouselCaptionOffsetLg};
    opacity: 1;
    transform: scale(${nonTokenValues.motion.scaleActive});
    color: ${nonTokenValues.effects.overlayWhite98};
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
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  max-width: 320px;
  margin: 0 auto;
`;

const CarouselVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  clip-path: inset(5.5% 0 0 0);
`;

const CarouselCaption = styled.p`
  margin-top: ${({ theme }) => theme.spacing[3]};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${nonTokenValues.effects.carouselCaptionMuted};
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

const resolveMediaUrl = (url: string) => (url.includes(' ') ? encodeURI(url) : url);

interface MindzyBrainTrainingProps {
  onBack?: () => void;
}

const videoFiles = [
  'Air Traffic.MP4',
  'Catch the bug.MP4',
  'Color count.MP4',
  'Linking Pairs.MP4',
  'Magnetic Grid.MP4',
  'Match pairs.MP4',
  'Missing operations.MP4',
  'Numbers sum.MP4',
  'Rain dots.MP4',
  'Remember the bubbles.MP4',
  'Robot Runner.MP4',
  'Simon game.MP4',
  'Space percentages.MP4',
  'Spelling Correction.MP4',
  'Sum Squares.MP4',
  'Word Pairs.MP4',
];

const MindzyBrainTraining: React.FC<MindzyBrainTrainingProps> = ({ onBack }) => {
  const { t } = useLanguage();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    window.location.hash = '#work';
  };

  const videoSources = useMemo(
    () => videoFiles.map((file) => `${VIDEO_BASE}/${file}`),
    []
  );

  const sliderSettings = useMemo(
    () => ({
      centerMode: true,
      centerPadding: '120px',
      infinite: true,
      slidesToShow: 3,
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
            slidesToShow: 3,
            centerPadding: '60px',
          },
        },
        {
          breakpoint: nonTokenValues.carousel.breakpointSm,
          settings: {
            slidesToShow: 2,
            slidesToScroll: nonTokenValues.carousel.slidesToScrollSm,
            centerPadding: '20px',
            centerMode: false,
            arrows: false,
          },
        },
        {
          breakpoint: nonTokenValues.carousel.breakpointXs,
          settings: {
            slidesToShow: 1,
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
          <BackButton onClick={handleBack}>
            <ArrowLeft size={18} />
            {t.mindzy.backToPortfolio}
          </BackButton>
          <HeaderTag>{t.work.categories.uiuxDesign}</HeaderTag>
        </HeaderInner>
      </Header>

      <Hero $coverUrl={resolveMediaUrl(HERO_COVER)}>
        <Container>
          <HeroContent>
            <Eyebrow>{t.mindzy.eyebrow}</Eyebrow>
            <Title>{t.mindzy.title}</Title>
            {t.mindzy.lead && <Lead>{t.mindzy.lead}</Lead>}
          </HeroContent>
        </Container>
      </Hero>

      <CarouselSection>
        <CarouselBackdrop />
        <Container>
          <SectionHeader>
            <SectionLine />
            <SectionTitle>{t.mindzy.videoTitle}</SectionTitle>
          </SectionHeader>
        </Container>
        <CarouselShell>
          <CarouselSlider {...sliderSettings}>
            {videoSources.map((source) => (
              <div key={source}>
                <CarouselCard className="carousel-card">
                  <CarouselVideo src={resolveMediaUrl(source)} muted loop playsInline autoPlay />
                </CarouselCard>
                <CarouselCaption className="carousel-caption">
                  {source.split('/').pop()?.replace('.MP4', '')}
                </CarouselCaption>
              </div>
            ))}
          </CarouselSlider>
        </CarouselShell>
      </CarouselSection>
    </Wrapper>
  );
};

export default MindzyBrainTraining;
