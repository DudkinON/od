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

    let self = this;

    const data = this.props.main;

    function asyncCallback(func) {
      self.state.functions.push(func);
    }

    function skillsCallback() {
      $('#skills').css("left", "0");
      self.state.functions.forEach(function (f) {
        f();
      });
    }
    $(document).ready(function(){
      $('#skills').viewportChecker({callbackFunction: skillsCallback});
    });


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