import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';

const ASSET_BASE_URL = '/assets';
const IMAGE_BASE = `${ASSET_BASE_URL}/images/brand/Combat Planes`;
const LOGO_IMAGE = `${IMAGE_BASE}/logo_Combat Planes.png`;
const GALLERY_IMAGES = [
  `${IMAGE_BASE}/Maps.png`,
  `${IMAGE_BASE}/Planes skins.png`,
  `${IMAGE_BASE}/Characters.png`,
];

const Wrapper = styled.section`
  min-height: ${nonTokenValues.layout.fullViewportHeight};
  background: #2C307A;
  padding-bottom: ${({ theme }) => theme.spacing[16]};
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${nonTokenValues.zIndex.stickyHeader};
  background: rgba(44, 48, 122, 0.85);
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

const resolveMediaUrl = (url: string) => (url.includes(' ') ? encodeURI(url) : url);

type CombatPlanesProps = {
  onBack: () => void;
};

const CombatPlanes: React.FC<CombatPlanesProps> = ({ onBack }) => {
  const { t } = useLanguage();

  return (
    <Wrapper>
      <Header>
        <HeaderInner>
          <BackButton onClick={onBack}>
            <ArrowLeft size={18} />
            {t.combatPlanes.backToPortfolio}
          </BackButton>
          <HeaderTag>{t.combatPlanes.headerTag}</HeaderTag>
        </HeaderInner>
      </Header>

      <Hero>
        <Eyebrow>{t.combatPlanes.eyebrow}</Eyebrow>
        <Title>{t.combatPlanes.title}</Title>
        <Lead>{t.combatPlanes.lead}</Lead>
      </Hero>

      <Section>
        <LogoContainer>
          <LogoImage src={resolveMediaUrl(LOGO_IMAGE)} alt={t.combatPlanes.logoAlt} />
        </LogoContainer>
        <GalleryGrid>
          {GALLERY_IMAGES.map((imageUrl, index) => (
            <GalleryCard key={index}>
              <GalleryImage 
                src={resolveMediaUrl(imageUrl)} 
                alt={`${t.combatPlanes.galleryAlt} ${index + 1}`} 
              />
            </GalleryCard>
          ))}
        </GalleryGrid>
      </Section>
    </Wrapper>
  );
};

export default CombatPlanes;
