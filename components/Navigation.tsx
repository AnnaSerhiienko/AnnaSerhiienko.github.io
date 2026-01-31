import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SectionId } from '../types.ts';
import { Menu, X, FileText } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';

const NavShell = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  width: 95%;
  max-width: 1024px;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  padding: ${({ theme, $scrolled }) => ($scrolled ? `${theme.spacing[3]} ${theme.spacing[8]}` : `${theme.spacing[6]} ${theme.spacing[8]}`)};
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.7)' : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(18px)' : 'none')};
  box-shadow: ${({ theme, $scrolled }) => ($scrolled ? theme.shadows.lg : 'none')};
  border: ${({ $scrolled }) => ($scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none')};
  transition: all 0.5s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: ${({ theme }) => theme.radii.full};
  }
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.slate[900]};
`;

const BrandAccent = styled.span`
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-style: italic;
  color: ${({ theme }) => theme.colors.brand.purple};
  transition: transform 0.2s ease;

  ${Brand}:hover & {
    transform: rotate(12deg);
  }
`;

const BrandText = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: inline;
  }
`;

const DesktopNav = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[10]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLink = styled.button`
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.slate[500]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.purple};
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const SecondaryAction = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.slate[400]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.slate[900]};
  }
`;

const PrimaryAction = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.slate[900]};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.purple};
    transform: translateY(-1px) scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const MobileToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[2]};
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.slate[900]};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 40;
  padding: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[8]};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: all 0.5s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileLink = styled.button`
  border: none;
  background: transparent;
  text-align: left;
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.slate[900]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.purple};
  }
`;

const MobileFooter = styled.div`
  padding-top: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid ${({ theme }) => theme.colors.slate[100]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const MobileSecondary = styled.button`
  border: none;
  background: transparent;
  text-align: left;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.slate[400]};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
`;

const MobilePrimary = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.slate[900]};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  cursor: pointer;
`;

interface NavigationProps {
  onNavigate?: (sectionId: SectionId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    if (onNavigate) {
      onNavigate(id);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const openEmail = () => {
    window.location.href = 'mailto:hi.anna.design@gmail.com';
  };

  const downloadCV = () => {
    alert("CV Download would trigger here (anna_serhiienko_resume.pdf)");
  };

  const navLinks = [
    { label: t.nav.work, id: SectionId.WORK },
    { label: t.nav.about, id: SectionId.ABOUT },
  ];

  return (
    <>
      <NavShell $scrolled={isScrolled}>
        <NavRow>
          <Brand onClick={() => scrollToSection(SectionId.HERO)}>
            <BrandAccent>A.</BrandAccent>
            <BrandText>Serhiienko</BrandText>
          </Brand>

          <DesktopNav>
            {navLinks.map((link) => (
              <NavLink key={link.id} onClick={() => scrollToSection(link.id)}>
                {link.label}
              </NavLink>
            ))}
            <ActionGroup>
              <SecondaryAction onClick={downloadCV}>
                <FileText size={16} />
                {t.nav.cv}
              </SecondaryAction>
              <PrimaryAction onClick={openEmail}>{t.nav.hireMe}</PrimaryAction>
            </ActionGroup>
          </DesktopNav>

          <MobileToggle onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileToggle>
        </NavRow>
      </NavShell>

      <MobileMenu $open={isMobileMenuOpen}>
        {navLinks.map((link) => (
          <MobileLink key={link.id} onClick={() => scrollToSection(link.id)}>
            {link.label}
          </MobileLink>
        ))}
        <MobileFooter>
          <MobileSecondary onClick={downloadCV}>
            <FileText size={24} />
            {t.nav.cv}
          </MobileSecondary>
          <MobilePrimary onClick={openEmail}>{t.nav.hireMe}</MobilePrimary>
        </MobileFooter>
      </MobileMenu>
    </>
  );
};

export default Navigation;