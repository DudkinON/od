import React from 'react';
import CenterBlock from './CenterBlock';
import Skills from './Skills';
import Certificates from './Certificates';
import Works from './Works';
import Contact from './Contact';


export const Landing = () => {
    return (
      <div className="landing">
        <CenterBlock />
        <Skills />
        <Certificates />
        <Works />
        <Contact />
      </div>
    );
}

export default Landing;