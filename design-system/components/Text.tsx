import React from 'react';
import styled from 'styled-components';
import { useLanguage, Translations } from '../../i18n.tsx';

type TextSize = keyof typeof defaultTextStyles;

export type FormattedMessage = (t: Translations) => string;

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  message: FormattedMessage;
  size?: TextSize;
  weight?: keyof typeof weightMap;
  color?: keyof typeof colorMap;
}

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

const defaultTextStyles = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const StyledText = styled.span<{
  $size: TextSize;
  $weight: keyof typeof weightMap;
  $color: keyof typeof colorMap;
}>`
  font-size: ${({ theme, $size }) => theme.typography.sizes[defaultTextStyles[$size]]};
  font-weight: ${({ theme, $weight }) => theme.typography.weights[weightMap[$weight]]};
  color: ${({ theme, $color }) => {
    if ($color === 'primary') return theme.colors.slate[900];
    if ($color === 'secondary') return theme.colors.slate[600];
    return theme.colors.slate[500];
  }};
`;

const Text: React.FC<TextProps> = ({
  as = 'span',
  message,
  size = 'md',
  weight = 'regular',
  color = 'secondary',
  ...rest
}) => {
  const { t } = useLanguage();

  return (
    <StyledText as={as} $size={size} $weight={weight} $color={color} {...rest}>
      {message(t)}
    </StyledText>
  );
};

export default Text;
