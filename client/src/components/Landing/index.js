import React, {Component} from 'react';
import CenterBlock from './CenterBlock';
import Skills from './Skills';


export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <CenterBlock />
        <Skills />
      </div>
    );
  }
}

export default Landing;