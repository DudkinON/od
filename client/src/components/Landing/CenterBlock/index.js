import React, {useCallback} from 'react';
import { useSelector } from 'react-redux';
import { Particles } from 'react-tsparticles';
import TextBlock from './TextBlock';
import { loadFull } from "tsparticles";

function CenterBlock() {
  const {particles} = useSelector(state => state.config.particles.landing);
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
    <section className="center-block__block">
      <Particles
        className="center-block__particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particles}
      />
      <TextBlock />
    </section>
  );
}

export default CenterBlock;
