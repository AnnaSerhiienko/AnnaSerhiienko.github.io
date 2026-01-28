import React from 'react';
import { SectionId } from '../types.ts';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="py-24">
      <div className="max-w-6xl mx-auto" />
    </section>
  );
};

export default Hero;