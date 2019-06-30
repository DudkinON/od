import React, {Component} from 'react';
import CenterBlock from './CenterBlock';
import Skills from './Skills';
import Certificates from './Certificates';


export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <CenterBlock />
        <Skills />
        <Certificates />
      </div>
    );
  }
}

export default Landing;