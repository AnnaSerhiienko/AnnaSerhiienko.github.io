import React from 'react';
import styled from 'styled-components';
import { SOCIALS, DESIGNER_NAME } from '../constants.ts';
import { Twitter, Linkedin, Dribbble, Mail } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';

const FooterShell = styled.footer`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.slate[900]};
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.slate[100]};
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const FooterBlock = styled.div<{ $align?: 'left' | 'right' }>`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: ${({ $align }) => ($align === 'right' ? 'right' : 'left')};
  }
`;

const Brand = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  letter-spacing: -0.01em;
`;

const MetaText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.slate[500]};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const SocialRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.slate[50]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.slate[500]};
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.slate[900]};
    transform: translateY(-4px);
  }
`;

const PrivacyLink = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors.slate[400]};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.purple};
  }
`;

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Twitter': return <Twitter size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Dribbble': return <Dribbble size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return null;
    }
  };

  return (
    <FooterShell>
      <FooterContent>
        <FooterBlock>
          <Brand>Anna Serhiienko</Brand>
          <MetaText>© {new Date().getFullYear()} {DESIGNER_NAME}. {t.footer.rights}</MetaText>
        </FooterBlock>

        <SocialRow>
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {getIcon(social.icon)}
            </SocialLink>
          ))}
        </SocialRow>

        <FooterBlock $align="right">
          <MetaText>{t.footer.portfolio} 2024</MetaText>
          <PrivacyLink href="#">{t.footer.privacy}</PrivacyLink>
        </FooterBlock>
      </FooterContent>
    </FooterShell>
  );
};

export default Footer;