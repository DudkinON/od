import React, {Component} from 'react';
import Background from './Background';
import Interest from './Interest';



export class About extends Component {

  render() {
    return (
      <div className="about">
        <Background/>
        <section className="about__interest">
          <Interest />
        </section>
      </div>
    );
  }
}

export default About;