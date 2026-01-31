import React from 'react';
import styled from 'styled-components';
import { useLanguage, Translations } from '../../i18n.tsx';

type HeadingSize = keyof typeof headingSizeMap;
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type FormattedMessage = (t: Translations) => string;

type HeadingWeight = keyof typeof weightMap;

type HeadingColor = keyof typeof colorMap;

type TextAlign = 'left' | 'center' | 'right';

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  level?: HeadingLevel;
  message: FormattedMessage;
  size?: HeadingSize;
  weight?: HeadingWeight;
  color?: HeadingColor;
  align?: TextAlign;
}

const headingSizeMap = {
  h1: '7xl',
  h2: '6xl',
  h3: '5xl',
  h4: '4xl',
  h5: '3xl',
  h6: '2xl',
};

const weightMap = {
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  bold: 'bold',
};

const colorMap = {
  primary: 'primary',
  secondary: 'secondary',
  muted: 'muted',
};

const StyledHeading = styled.h2<{
  $size: HeadingSize;
  $weight: HeadingWeight;
  $color: HeadingColor;
  $align: TextAlign;
}>`
  margin: 0;
  text-align: ${({ $align }) => $align};
  font-size: ${({ theme, $size }) => theme.typography.sizes[headingSizeMap[$size]]};
  font-weight: ${({ theme, $weight }) => theme.typography.weights[weightMap[$weight]]};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  color: ${({ theme, $color }) => {
    if ($color === 'primary') return theme.colors.slate[900];
    if ($color === 'secondary') return theme.colors.slate[600];
    return theme.colors.slate[500];
  }};
`;

const Heading: React.FC<HeadingProps> = ({
  as,
  level = 2,
  message,
  size,
  weight = 'bold',
  color = 'primary',
  align = 'left',
  ...rest
}) => {
  const { t } = useLanguage();
  const fallbackTag = `h${level}` as const;
  const headingSize = size ?? (fallbackTag as HeadingSize);
  const HeadingTag = as ?? fallbackTag;

  return (
    <StyledHeading
      as={HeadingTag}
      $size={headingSize}
      $weight={weight}
      $color={color}
      $align={align}
      {...rest}
    >
      {message(t)}
    </StyledHeading>
  );
};

export default Heading;
