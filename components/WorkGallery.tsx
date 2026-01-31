import React, { useState, useMemo, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { SectionId, Project } from '../types.ts';
import { PROJECTS, WORK_CATEGORIES } from '../constants.ts';
import { ArrowUpRight, Filter, X, ExternalLink, Tag } from 'lucide-react';
import { useLanguage, getCategoryTranslation } from '../i18n.tsx';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';

const reveal = keyframes`
  0% { opacity: 0; transform: translateY(${nonTokenValues.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  background: ${nonTokenValues.effects.sectionWash};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const HeadingGroup = styled.div`
  max-width: ${nonTokenValues.layout.workHeadingMaxWidth};
`;

const Title = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing[6]} 0;
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.slate[900]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  }
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.slate[500]};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.3s ease;
  border: ${nonTokenValues.sizing.hairline} solid ${({ theme, $active }) => ($active ? 'transparent' : theme.colors.slate[100])};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.slate[400])};
  background: ${({ theme, $active }) => ($active ? theme.colors.slate[900] : theme.colors.white)};
  box-shadow: ${({ theme, $active }) => ($active ? theme.shadows.md : 'none')};
  transform: ${({ $active }) => ($active ? 'scale(1.05)' : 'scale(1)')};

  &:hover {
    border-color: ${({ theme }) => theme.colors.brand.purple};
    color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.brand.purple)};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing[12]};
  }
`;

const Card = styled.div`
  cursor: pointer;
  animation: ${reveal} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`;

const MediaFrame = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: ${({ theme }) => theme.radii['4xl']};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.slate[200]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  ${Card}:hover & {
    transform: translateY(${nonTokenValues.motion.hoverLiftLg});
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transform: scale(1.1);
  transition: transform 0.7s ease, filter 0.7s ease;

  ${Card}:hover & {
    filter: grayscale(0);
    transform: scale(1);
  }
`;

const MediaVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transform: scale(1.1);
  transition: transform 0.7s ease, filter 0.7s ease;

  ${Card}:hover & {
    filter: grayscale(0);
    transform: scale(1);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing[10]};
  background: ${nonTokenValues.effects.cardOverlayGradient};
  opacity: 0;
  transition: opacity 0.5s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardCategory = styled.span`
  color: ${nonTokenValues.effects.overlayWhite60};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const CardTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  color: ${({ theme }) => theme.colors.white};
`;

const CardAction = styled.div`
  width: ${({ theme }) => theme.spacing[9]};
  height: ${({ theme }) => theme.spacing[9]};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.full};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.slate[900]};
  transform: scale(0);
  transition: transform 0.5s ease 0.1s;

  ${Card}:hover & {
    transform: scale(1);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii['4xl']};
  border: ${nonTokenValues.sizing.dashedBorderWidth} dashed ${({ theme }) => theme.colors.slate[100]};
`;

const EmptyText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.slate[400]};
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-style: italic;
  font-size: ${({ theme }) => theme.typography.sizes.xl};
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${nonTokenValues.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  animation: ${fadeIn} 0.2s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[10]};
  }
`;

const ModalBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: ${nonTokenValues.effects.overlayDark95};
  backdrop-filter: blur(${nonTokenValues.effects.blurStrong});
`;

const ModalCard = styled.div`
  position: relative;
  width: 100%;
  max-width: ${nonTokenValues.layout.workModalMaxWidth};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii['4xl']};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  display: flex;
  flex-direction: column;
  max-height: ${nonTokenValues.layout.workModalMaxHeight};
  animation: ${reveal} 0.6s cubic-bezier(0, 0, 0.2, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing[6]};
  right: ${({ theme }) => theme.spacing[6]};
  z-index: ${nonTokenValues.zIndex.closeButton};
  width: ${({ theme }) => theme.spacing[9]};
  height: ${({ theme }) => theme.spacing[9]};
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background: ${nonTokenValues.effects.glassWhite10};
  color: ${({ theme }) => theme.colors.slate[900]};
  cursor: pointer;
  backdrop-filter: blur(${nonTokenValues.effects.blurGlass});
  transition: background 0.2s ease;

  &:hover {
    background: ${nonTokenValues.effects.glassWhite20};
  }
`;

const ModalMedia = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.slate[100]};
  overflow: hidden;
  height: ${nonTokenValues.layout.workModalMediaHeight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60%;
    height: auto;
  }
`;

const ModalMediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalMediaVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalContent = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40%;
    padding: ${({ theme }) => theme.spacing[12]};
  }
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.brand.purple};
`;

const TagLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
`;

const ModalTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[6]} 0;
  font-family: ${({ theme }) => theme.typography.fonts.serif};
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  color: ${({ theme }) => theme.colors.slate[900]};
`;

const ModalDescription = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing[10]} 0;
  color: ${({ theme }) => theme.colors.slate[500]};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const TechGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[10]};
`;

const TechTitle = styled.h4`
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.slate[400]};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const TechBadge = styled.span`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.slate[50]};
  border-radius: ${({ theme }) => theme.radii.xl};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.slate[600]};
  border: ${nonTokenValues.sizing.hairline} solid ${({ theme }) => theme.colors.slate[100]};
`;

const ModalFooter = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing[8]};
  border-top: ${nonTokenValues.sizing.hairline} solid ${({ theme }) => theme.colors.slate[100]};
`;

const ModalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.slate[900]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.purple};
    transform: translateY(${nonTokenValues.motion.hoverLiftSm});
  }
`;

const WorkGallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  const categories = ['All', ...WORK_CATEGORIES];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id={SectionId.WORK}>
      <Container>
        <Header>
          <HeadingGroup>
            <Title>{t.work.title}</Title>
            <Subtitle>{t.work.subtitle}</Subtitle>
          </HeadingGroup>

          <CategoryList>
            {categories.map((cat) => (
              <CategoryButton
                key={cat}
                $active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? t.work.all : getCategoryTranslation(cat, t)}
              </CategoryButton>
            ))}
          </CategoryList>
        </Header>

        <Grid>
          {filteredProjects.map((project, index) => {
            const projectCopy = t.projects[project.id];
            const projectTitle = projectCopy?.title ?? project.title;
            return (
            <Card
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <MediaFrame>
                {project.mediaType === 'video' ? (
                  <MediaVideo src={project.mediaUrl} muted loop playsInline autoPlay />
                ) : (
                  <MediaImage src={project.mediaUrl} alt={projectTitle} />
                )}

                <CardOverlay>
                  <CardCategory>{getCategoryTranslation(project.category, t)}</CardCategory>
                  <CardTitle>{projectTitle}</CardTitle>
                  <CardAction>
                    <ArrowUpRight size={24} />
                  </CardAction>
                </CardOverlay>
              </MediaFrame>
            </Card>
          );
          })}
        </Grid>

        {filteredProjects.length === 0 && (
          <EmptyState>
            <Filter color="#e2e8f0" size={48} />
            <EmptyText>{t.work.emptyState}</EmptyText>
          </EmptyState>
        )}
      </Container>

      {selectedProject && (
        (() => {
          const projectCopy = t.projects[selectedProject.id];
          const projectTitle = projectCopy?.title ?? selectedProject.title;
          const projectDescription = projectCopy?.description ?? selectedProject.description;
          const projectTechnologies = projectCopy?.technologies ?? selectedProject.technologies;
          return (
        <ModalOverlay>
          <ModalBackdrop onClick={() => setSelectedProject(null)} />

          <ModalCard>
            <CloseButton onClick={() => setSelectedProject(null)} aria-label={t.work.close}>
              <X size={24} />
            </CloseButton>

            <ModalMedia>
              {selectedProject.mediaType === 'video' ? (
                <ModalMediaVideo src={selectedProject.mediaUrl} autoPlay muted loop controls />
              ) : (
                <ModalMediaImage src={selectedProject.mediaUrl} alt={projectTitle} />
              )}
            </ModalMedia>

            <ModalContent>
              <TagRow>
                <Tag size={14} />
                <TagLabel>{getCategoryTranslation(selectedProject.category, t)}</TagLabel>
              </TagRow>

              <ModalTitle>{projectTitle}</ModalTitle>

              <ModalDescription>{projectDescription}</ModalDescription>

              <TechGroup>
                <TechTitle>{t.work.technologies}</TechTitle>
                <TechList>
                  {projectTechnologies.map((tech, idx) => (
                    <TechBadge key={idx}>{tech}</TechBadge>
                  ))}
                </TechList>
              </TechGroup>

              <ModalFooter>
                <ModalLink href={selectedProject.link}>
                  {t.work.viewProject}
                  <ExternalLink size={18} />
                </ModalLink>
              </ModalFooter>
            </ModalContent>
          </ModalCard>
        </ModalOverlay>
          );
        })()
      )}
    </Section>
  );
};

export default WorkGallery;