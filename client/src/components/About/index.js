import React from 'react';
import Background from './Background';
import Interest from './Interest';


export const About = () => (
    <div className="about">
      <Background/>
      <section className="about__interest">
        <Interest/>
      </section>
    </div>
  );


export default About;