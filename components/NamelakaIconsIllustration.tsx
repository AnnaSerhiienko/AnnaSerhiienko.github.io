import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';

const Wrapper = styled.section`
  min-height: ${nonTokenValues.layout.fullViewportHeight};
  background: ${({ theme }) => theme.colors.white};
  padding-bottom: ${({ theme }) => theme.spacing[16]};
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

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
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

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[12]};
`;

const PreviewFrame = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  border-radius: ${({ theme }) => theme.radii['4xl']};
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[4]};
  border: ${nonTokenValues.sizing.hairline} solid ${({ theme }) => theme.colors.slate[100]};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radii['3xl']};
`;

const resolveMediaUrl = (url: string) => (url.includes(' ') ? encodeURI(url) : url);

type NamelakaIconsIllustrationProps = {
  onBack: () => void;
};

const NamelakaIconsIllustration: React.FC<NamelakaIconsIllustrationProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const previewUrl = '/assets/images/brand/Namelaka icons and illustration/Namelaka.png';

  return (
    <Wrapper>
      <Header>
        <HeaderInner>
          <BackButton onClick={onBack}>
            <ArrowLeft size={18} />
            {t.namelaka.backToPortfolio}
          </BackButton>
          <HeaderTag>{t.namelaka.headerTag}</HeaderTag>
        </HeaderInner>
      </Header>

      <Hero>
        <Eyebrow>{t.namelaka.eyebrow}</Eyebrow>
        <Title>{t.namelaka.title}</Title>
      </Hero>

      <Section>
        <Container>
          <PreviewFrame>
            <PreviewImage src={resolveMediaUrl(previewUrl)} alt={t.namelaka.title} />
          </PreviewFrame>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default NamelakaIconsIllustration;
