import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SectionId } from '../types';
import { ArrowDown, Figma, PenTool, Image as ImageIcon, Gamepad2 } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';
import Text from '../design-system/components/Text.tsx';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const reveal = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[6]} 0;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
  animation: ${reveal} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`;

const FloatingIcon = styled.div`
  position: absolute;
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  animation: ${float} 6s ease-in-out infinite;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const FloatingIconDelayed = styled(FloatingIcon)`
  animation-delay: 3s;
`;

const AvailabilityPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.slate[200]};
  border-radius: ${({ theme }) => theme.radii.full};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const PulseDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: ${({ theme }) => theme.radii.full};
  background: #22c55e;
  animation: ${float} 3s ease-in-out infinite;
`;

const AvailabilityText = styled.span`
  color: ${({ theme }) => theme.colors.slate[600]};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const Heading = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.slate[900]};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['6xl']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.sizes['7xl']};
  }
`;

const GradientText = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Lead = styled(Text)`
  margin: 0 auto ${({ theme }) => theme.spacing[12]} auto;
  max-width: 560px;
  color: ${({ theme }) => theme.colors.slate[500]};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.button`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.slate[900]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.purple};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ArrowIcon = styled(ArrowDown)`
  transition: transform 0.2s ease;

  ${PrimaryButton}:hover & {
    transform: translateY(4px);
  }
`;

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Section id={SectionId.HERO}>
      <Content>
        <FloatingIcon style={{ left: '-48px', top: 0 }}>
          <Figma color="#7c3aed" size={32} />
        </FloatingIcon>
        <FloatingIconDelayed style={{ right: '-48px', top: 80 }}>
          <PenTool color="#3b82f6" size={32} />
        </FloatingIconDelayed>
        <FloatingIconDelayed style={{ left: '40px', bottom: 0 }}>
          <ImageIcon color="#ec4899" size={32} />
        </FloatingIconDelayed>
        <FloatingIcon style={{ right: 0, bottom: 40 }}>
          <Gamepad2 color="#10b981" size={32} />
        </FloatingIcon>

        <AvailabilityPill>
          <PulseDot />
          <AvailabilityText>{t.hero.available}</AvailabilityText>
        </AvailabilityPill>

        <Heading>
          {t.hero.heading1} <br />
          <GradientText>{t.hero.heading2}</GradientText>
        </Heading>

        <Lead as="p" message={(translations) => translations.hero.lead} />

        <Actions>
          <PrimaryButton onClick={() => document.getElementById(SectionId.WORK)?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero.viewWork}
            <ArrowIcon size={18} />
          </PrimaryButton>
        </Actions>
      </Content>
    </Section>
  );
};

export default Hero;