import React from 'react';
import CV from './cv.pdf';
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-cv">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary btn-contact-me">
        Contact me
      </a>
    </div>
  );
};

export default CTA;
