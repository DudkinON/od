import React, {Component} from 'react';
import Particles from 'react-particles-js';
import {connect} from 'react-redux';
import TextBlock from './TextBlock';


function mapStateToProps(state) {
  return {
    particles: state.config.particles
  };
}

export class CenterBlock extends Component {

  render() {

    return (
      <section className="center-block__block">
        <Particles params={this.props.particles} className="center-block__particles" />
        <TextBlock />
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
)(CenterBlock);