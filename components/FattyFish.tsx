import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';

const ASSET_BASE_URL = '/assets';
const IMAGE_BASE = `${ASSET_BASE_URL}/images/brand/Fatty Fish`;
const LOGO_IMAGE = `${IMAGE_BASE}/Logo Fatty Fish.png`;
const VIDEO_URL = `${ASSET_BASE_URL}/video/Fatty Fish/Fatty Fish video.mp4`;
const GALLERY_IMAGES = [
  `${IMAGE_BASE}/Character.png`,
  `${IMAGE_BASE}/Objects.png`,
];
const SCREENSHOT_IMAGES = [
  `${IMAGE_BASE}/IMG_1.png`,
  `${IMAGE_BASE}/IMG_2.png`,
];

const Wrapper = styled.section`
  min-height: ${nonTokenValues.layout.fullViewportHeight};
  background: #4F22D1;
  padding-bottom: ${({ theme }) => theme.spacing[16]};
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${nonTokenValues.zIndex.stickyHeader};
  background: rgba(79, 34, 209, 0.85);
  backdrop-filter: blur(${nonTokenValues.effects.blurStrong});
  border-bottom: ${nonTokenValues.sizing.hairline} solid rgba(255, 255, 255, 0.1);
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
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.slate[300]};
  }
`;

const HeaderTag = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.slate[300]};
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
  color: ${({ theme }) => theme.colors.slate[300]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 ${({ theme }) => theme.spacing[6]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['6xl']};
  }
`;

const Lead = styled.p`
  max-width: ${nonTokenValues.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.slate[300]};
  margin: 0 auto;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[12]};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const LogoImage = styled.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 360px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[6]};
  }
`;

const GalleryCard = styled.div`
  overflow: hidden;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ScreenshotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 64%;
  margin: ${({ theme }) => theme.spacing[6]} auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 80%;
  }
`;

const ScreenshotImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const VideoContainer = styled.div`
  max-width: 64%;
  margin: ${({ theme }) => theme.spacing[8]} auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 80%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${({ theme }) => theme.radii['2xl']};
`;

const resolveMediaUrl = (url: string) => (url.includes(' ') ? encodeURI(url) : url);

type FattyFishProps = {
  onBack: () => void;
};

const FattyFish: React.FC<FattyFishProps> = ({ onBack }) => {
  const { t } = useLanguage();

  return (
    <Wrapper>
      <Header>
        <HeaderInner>
          <BackButton onClick={onBack}>
            <ArrowLeft size={18} />
            {t.fattyFish.backToPortfolio}
          </BackButton>
          <HeaderTag>{t.fattyFish.headerTag}</HeaderTag>
        </HeaderInner>
      </Header>

      <Hero>
        <Eyebrow>{t.fattyFish.eyebrow}</Eyebrow>
        <Title>{t.fattyFish.title}</Title>
        <Lead>{t.fattyFish.lead}</Lead>
      </Hero>

      <Section>
        <LogoContainer>
          <LogoImage src={resolveMediaUrl(LOGO_IMAGE)} alt={t.fattyFish.logoAlt} />
        </LogoContainer>
        <GalleryGrid>
          {GALLERY_IMAGES.map((imageUrl, index) => (
            <GalleryCard key={index}>
              <GalleryImage 
                src={resolveMediaUrl(imageUrl)} 
                alt={`${t.fattyFish.galleryAlt} ${index + 1}`} 
              />
            </GalleryCard>
          ))}
        </GalleryGrid>
        <ScreenshotsGrid>
          {SCREENSHOT_IMAGES.map((imageUrl, index) => (
            <ScreenshotImage
              key={index}
              src={resolveMediaUrl(imageUrl)}
              alt={`${t.fattyFish.galleryAlt} screenshot ${index + 1}`}
            />
          ))}
        </ScreenshotsGrid>
        <VideoContainer>
          <Video
            src={resolveMediaUrl(VIDEO_URL)}
            autoPlay
            loop
            muted
            playsInline
          />
        </VideoContainer>
      </Section>
    </Wrapper>
  );
};

export default FattyFish;
