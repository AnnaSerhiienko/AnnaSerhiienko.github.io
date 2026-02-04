import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';

const ASSET_BASE_URL = '/assets';
const VIDEO_BASE = `${ASSET_BASE_URL}/video/Marketing video`;
const HERO_COVER = `${ASSET_BASE_URL}/images/brand/Full_Composition_Marketing_video.png`;

const Wrapper = styled.section`
  min-height: ${nonTokenValues.layout.fullViewportHeight};
  background: ${nonTokenValues.effects.appIconsBackground};
  padding-bottom: ${({ theme }) => theme.spacing[16]};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};
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
  position: relative;
  padding: ${({ theme }) => theme.spacing[14]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[10]};
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--hero-cover-url);
    background-size: cover;
    background-position: center;
    opacity: 0.35;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.4) 100%);
  pointer-events: none;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
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
  margin-top: ${({ theme }) => theme.spacing[12]};
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

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HorizontalVideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const HorizontalVideoCard = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.slate[100]};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
`;

const VideoCard = styled.div`
  position: relative;
  aspect-ratio: 9 / 16;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.slate[100]};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoCaption = styled.p`
  margin-top: ${({ theme }) => theme.spacing[3]};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.slate[600]};
`;

const FeaturedSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto ${({ theme }) => theme.spacing[12]};
  }
`;

const FeaturedCard = styled.div`
  position: relative;
  aspect-ratio: 9 / 16;
  border-radius: ${({ theme }) => theme.radii['3xl']};
  overflow: hidden;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.brand.purple}20, ${({ theme }) => theme.colors.brand.blue}20);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.15);
`;

const FeaturedVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const resolveMediaUrl = (url: string) => encodeURI(url);

interface MarketingVideoProps {
  onBack?: () => void;
}

// Portrait videos (1080x1920) - displayed at top in vertical position
const portraitVideos = [
  '1080x1920.mp4',
  'App Store.mp4',
  'Concept_2_1080x1920.mp4',
  'video5_1080x1920.mp4',
  'Video_1080x1920_android.mp4',
  'valentine_stickers.mp4',
];

// Landscape videos (1920x1080)
const landscapeVideos = [
  'Comp 1.mp4',
  'Concept 1 17-09_1.mp4',
  'main video_2.mp4',
  'video.mp4',
  'Google play.mp4',
  'Video (1).mp4',
];

const MarketingVideo: React.FC<MarketingVideoProps> = ({ onBack }) => {
  const { t } = useLanguage();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    window.location.hash = '#work';
  };

  return (
    <Wrapper>
      <Header>
        <HeaderInner>
          <BackButton onClick={handleBack}>
            <ArrowLeft size={18} />
            {t.marketingVideo.backToPortfolio}
          </BackButton>
          <HeaderTag>{t.marketingVideo.headerTag}</HeaderTag>
        </HeaderInner>
      </Header>

      <Hero style={{ '--hero-cover-url': `url(${resolveMediaUrl(HERO_COVER)})` } as React.CSSProperties}>
        <HeroOverlay />
        <HeroContent>
          <Eyebrow>{t.marketingVideo.eyebrow}</Eyebrow>
          <Title>{t.marketingVideo.title}</Title>
          <Lead>{t.marketingVideo.lead}</Lead>
        </HeroContent>
      </Hero>

      <Container>
        <SectionHeader>
          <SectionLine />
          <SectionTitle>{t.marketingVideo.allVideosTitle}</SectionTitle>
        </SectionHeader>

        <VideoGrid>
          {portraitVideos.map((file) => (
            <VideoCard key={file}>
              <Video
                src={resolveMediaUrl(`${VIDEO_BASE}/${file}`)}
                muted
                loop
                playsInline
                autoPlay
              />
            </VideoCard>
          ))}
        </VideoGrid>

        <HorizontalVideoGrid>
          {landscapeVideos.map((file) => (
            <HorizontalVideoCard key={file}>
              <Video
                src={resolveMediaUrl(`${VIDEO_BASE}/${file}`)}
                muted
                loop
                playsInline
                autoPlay
              />
            </HorizontalVideoCard>
          ))}
        </HorizontalVideoGrid>
      </Container>
    </Wrapper>
  );
};

export default MarketingVideo;
