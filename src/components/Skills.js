import React, {Component} from 'react';
import SkillsBlock from './SkillsBlock'
import $ from 'jquery'

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      functions: []
    };
  }

  render() {

    let scope = this;

    const data = this.props.main;

    function asyncCallback(func) {
      scope.state.functions.push(func);
    }

    function skillsCallback() {
      $('#skills').css("left", "0");
      scope.state.functions.forEach(function (f) {
        f();
      });
      scene.destroy();
      scene = null
    }


    let scene = new this.props.scene({
      offset: 400,    // start this scene
      duration: 500   // end this scene
    }).setPin("#skills")
      .on("end", skillsCallback)
      .addTo(this.props.controller);

    return (
      <section className="skills" id="skills" style={{left: "-100%"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <h3 className="skills-title">{data.title}</h3>
              <div className="white-icon"><i className="fas fa-file-code"/></div>
            </div>
            <SkillsBlock data={data.list} asyncCallback={asyncCallback}/>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;