import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';
import { PROJECTS } from '../constants.ts';

const Wrapper = styled.section`
  min-height: ${nonTokenValues.layout.fullViewportHeight};
  background: ${nonTokenValues.effects.appIconsBackground};
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

const Lead = styled.p`
  max-width: ${nonTokenValues.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.slate[500]};
  margin: 0 auto;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[12]};
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
`;

const GroupTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.slate[500]};
`;

const Row = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing[2]};

  &::-webkit-scrollbar {
    height: ${nonTokenValues.sizing.scrollbarWidth};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.slate[200]};
    border-radius: ${({ theme }) => theme.radii.full};
  }
`;

const ShotCard = styled.div`
  flex: 0 0 auto;
  width: 240px;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  border: none;
  box-shadow: none;
`;

const ShotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const resolveMediaUrl = (url: string) => (url.includes(' ') ? encodeURI(url) : url);

type AppStoreScreenshotsProps = {
  onBack: () => void;
};

const AppStoreScreenshots: React.FC<AppStoreScreenshotsProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const project = PROJECTS.find((item) => item.id === 17);

  const groups = useMemo(() => {
    const gallery = project?.gallery ?? [];
    const result: { name: string; items: string[] }[] = [];
    const index = new Map<string, number>();

    gallery.forEach((url) => {
      const fileName = decodeURIComponent(url.split('/').pop() ?? '');
      const baseName = fileName.replace(/\.[^/.]+$/, '');
      const withoutLeading = baseName.replace(/^\d+\s+/, '');
      const groupName = withoutLeading.replace(/\s+\d+$/, '');
      const key = groupName || 'Screenshots';

      if (!index.has(key)) {
        index.set(key, result.length);
        result.push({ name: key, items: [url] });
      } else {
        result[index.get(key)!].items.push(url);
      }
    });

    return result;
  }, [project?.gallery]);

  return (
    <Wrapper>
      <Header>
        <HeaderInner>
          <BackButton onClick={onBack}>
            <ArrowLeft size={18} />
            {t.appStoreScreenshots.backToPortfolio}
          </BackButton>
          <HeaderTag>{t.appStoreScreenshots.headerTag}</HeaderTag>
        </HeaderInner>
      </Header>

      <Hero>
        <Eyebrow>{t.appStoreScreenshots.eyebrow}</Eyebrow>
        <Title>{t.appStoreScreenshots.title}</Title>
        {t.appStoreScreenshots.lead && <Lead>{t.appStoreScreenshots.lead}</Lead>}
      </Hero>

      <Section>
        <Container>
          {groups.map((group) => (
            <Group key={group.name}>
              <GroupTitle>{group.name}</GroupTitle>
              <Row>
                {group.items.map((image, idx) => (
                  <ShotCard key={`${group.name}-${idx}`}>
                    <ShotImage src={resolveMediaUrl(image)} alt={`${group.name} ${idx + 1}`} loading="lazy" />
                  </ShotCard>
                ))}
              </Row>
            </Group>
          ))}
        </Container>
      </Section>
    </Wrapper>
  );
};

export default AppStoreScreenshots;
