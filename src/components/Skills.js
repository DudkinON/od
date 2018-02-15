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
      /**
       * Get function and add to array
       * @param func: (function)
       * @return void:
       */
      self.state.functions.push(func);
    }

    function skillsCallback() {
      self.state.functions.forEach(function (f) {
        f();
      });
    }

    $(document).ready(function(){
      $('#skills').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'visible fadeInLeft',
        callbackFunction: skillsCallback,
        offset: 300
      });
    });


    return (
      <section className="skills animated invisible" id="skills">
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