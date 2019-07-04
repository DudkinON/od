import React, {Component} from 'react';
import Background from './Background';


export class About extends Component {

  render() {
    return (
      <div className="about">
        <Background/>
        <section className="about__container">
          <div className="about__content">
            <div className="about__header">
              <div className="about__header--text">Header</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;