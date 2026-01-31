import React from 'react';
import styled from 'styled-components';
import { SectionId } from '../types.ts';
import Text from '../design-system/components/Text.tsx';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
`;

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`;

const Title = styled(Text)`
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.slate[900]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const Subtitle = styled(Text)`
  margin: 0 auto;
  max-width: 480px;
  color: ${({ theme }) => theme.colors.slate[500]};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const Contact: React.FC = () => {
  return (
    <Section id={SectionId.CONTACT}>
      <Container>
        <Header>
          <Title as="h2" message={(translations) => translations.contact.title} />
          <Subtitle as="p" message={(translations) => translations.contact.subtitle} />
        </Header>
      </Container>
    </Section>
  );
};

export default Contact;