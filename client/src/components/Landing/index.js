import React, {Component} from 'react';
import CenterBlock from './CenterBlock';
import Skills from './Skills';
import Certificates from './Certificates';
import Works from './Works';
import Contact from './Contact';


export class Landing extends Component {
  render() {
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
}

export default Landing;