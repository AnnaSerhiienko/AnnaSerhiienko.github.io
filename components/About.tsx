import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SectionId } from '../types.ts';
import { SKILLS } from '../constants.ts';
import { Check, Star } from 'lucide-react';
import { useLanguage, getSkillTranslation } from '../i18n.tsx';
import Text from '../design-system/components/Text.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';
import assetUrl from '../utils/assetUrl.ts';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${nonTokenValues.motion.floatOffset}); }
`;

const Section = styled.section`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
`;

const Watermark = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[10]};
  right: ${nonTokenValues.layout.aboutWatermarkOffsetX};
  font-size: ${nonTokenValues.layout.aboutWatermarkFontSize};
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-style: italic;
  color: ${({ theme }) => theme.colors.slate[50]};
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[13]};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageColumn = styled.div`
  position: relative;
`;

const PortraitCard = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii['4xl']};
  overflow: hidden;
  aspect-ratio: 4 / 5;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: ${({ theme }) => theme.spacing[2]} solid ${({ theme }) => theme.colors.white};

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div[data-overlay] {
    opacity: 1;
  }
`;

const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
`;

const PortraitOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${nonTokenValues.effects.aboutOverlayGradient};
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ExperienceCard = styled.div`
  position: absolute;
  bottom: -${({ theme }) => theme.spacing[9]};
  right: -${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radii['3xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: ${nonTokenValues.sizing.hairline} solid ${({ theme }) => theme.colors.slate[100]};
  animation: ${float} 6s ease-in-out infinite;
  max-width: ${nonTokenValues.layout.aboutExperienceMaxWidth};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    right: -${({ theme }) => theme.spacing[10]};
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const ExperienceLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wider};
  color: ${({ theme }) => theme.colors.slate[400]};
`;

const ExperienceValue = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing[1]} 0;
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.slate[900]};
`;

const ExperienceSub = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
`;

const ExperienceText = styled(Text)`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.slate[500]};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Eyebrow = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wider};
  color: ${({ theme }) => theme.colors.brand.purple};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const Heading = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing[10]} 0;
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.slate[900]};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['6xl']};
  }
`;

const Emphasis = styled.span`
  font-style: italic;
`;

const Bio = styled(Text)`
  margin: 0 0 ${({ theme }) => theme.spacing[12]} 0;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors.slate[500]};
  font-weight: ${({ theme }) => theme.typography.weights.light};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const SkillsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[12]};
`;

const SkillsTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: 0 0 ${({ theme }) => theme.spacing[6]} 0;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.slate[900]};
`;

const SkillsDivider = styled.div`
  width: ${({ theme }) => theme.spacing[7]};
  height: ${nonTokenValues.sizing.hairline};
  background: ${({ theme }) => theme.colors.slate[900]};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  transition: color 0.3s ease;
`;

const SkillIcon = styled.div`
  width: ${({ theme }) => theme.spacing[5]};
  height: ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.slate[100]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
`;

const SkillCheck = styled(Check)`
  color: ${({ theme }) => theme.colors.slate[400]};
  transition: color 0.3s ease;
`;

const SkillLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.slate[600]};
  transition: color 0.3s ease;
`;

const SkillRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  &:hover ${SkillIcon} {
    background: ${({ theme }) => theme.colors.brand.purple};
  }

  &:hover ${SkillCheck} {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover ${SkillLabel} {
    color: ${({ theme }) => theme.colors.slate[900]};
  }
`;

const About: React.FC = () => {
  const { t } = useLanguage();
    const portraitUrl = assetUrl('images/profile/me.png');
  
  return (
    <Section id={SectionId.ABOUT}>
      <Watermark>{t.about.watermark}</Watermark>

      <Container>
        <Grid>
          <ImageColumn>
            <PortraitCard>
              <PortraitImage src={portraitUrl} alt={t.about.portraitAlt} />
              <PortraitOverlay data-overlay />
            </PortraitCard>

            <ExperienceCard>
              <ExperienceHeader>
                <Star color="#6366f1" fill="#6366f1" size={16} />
                <ExperienceLabel>{t.about.experience}</ExperienceLabel>
              </ExperienceHeader>
              <ExperienceValue>
                5+ <ExperienceSub>{t.about.years}</ExperienceSub>
              </ExperienceValue>
              <ExperienceText element="p" message={(translations) => translations.about.experienceText} />
            </ExperienceCard>
          </ImageColumn>

          <Content>
            <Eyebrow>{t.about.discovery}</Eyebrow>
            <Heading>
              {t.about.heading1} <Emphasis>{t.about.emphasis}</Emphasis> <br /> {t.about.heading2}
            </Heading>

            <Bio element="p" message={(translations) => translations.about.bio} />

            <SkillsGroup>
              <div>
                <SkillsTitle>
                  <SkillsDivider />
                  {t.about.proficiencies}
                </SkillsTitle>
                <SkillsGrid>
                  {SKILLS.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillRow>
                        <SkillIcon>
                          <SkillCheck size={12} />
                        </SkillIcon>
                        <SkillLabel>{getSkillTranslation(skill, t)}</SkillLabel>
                      </SkillRow>
                    </SkillItem>
                  ))}
                </SkillsGrid>
              </div>
            </SkillsGroup>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;