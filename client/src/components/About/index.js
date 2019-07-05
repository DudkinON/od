import React, {Component} from 'react';
import Background from './Background';
import Content from './Content';



export class About extends Component {

  render() {
    return (
      <div className="about">
        <Background/>
        <section className="about__container">
          <Content />
        </section>
      </div>
    );
  }
}

export default About;