import React from 'react';
import { connect } from 'react-redux';
import { Particles } from 'react-tsparticles';
import Content from "./Content";

function mapStateToProps(state) {
  return {
    settings: state.config.particles.about
  };
}

function Background({ settings }) {
  return (
    <div className="about__background">
      <Particles options={settings} className="about__particles" />
      <section className="about__container">
        <Content />
      </section>
    </div>
  );
}

export default connect(mapStateToProps)(Background);
