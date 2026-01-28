import React from 'react';
import { SectionId } from '../types.ts';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Let's Create Together</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            Contact section removed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;