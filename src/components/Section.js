import React from 'react';

const Section = ({ id, children }) => {
  return (
    <section id={id} className="py-8 section-bg">
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
