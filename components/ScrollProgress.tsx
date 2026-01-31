import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { nonTokenValues } from '../design-system/nonTokenValues.ts';

const Bar = styled.div.attrs<{ $width: number }>(({ $width }) => ({
  style: { width: `${$width}%` },
}))<{ $width: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: ${nonTokenValues.sizing.progressBarHeight};
  background: linear-gradient(90deg, #6366f1, #ec4899);
  z-index: ${nonTokenValues.zIndex.progress};
  transition: width 0.1s ease;
`;

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setProgress(scrolled);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Bar $width={progress} />;
};

export default ScrollProgress;
