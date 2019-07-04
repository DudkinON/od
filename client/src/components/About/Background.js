import React, {Component} from 'react';
import {connect} from 'react-redux';
import Particles from "react-particles-js";

function mapStateToProps(state) {
  return {
    settings: state.config.particles.about
  };
}

export class Background extends Component {
  render() {
    return (
      <div className="about__background">
        <Particles params={this.props.settings} className="about__particles" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Background);