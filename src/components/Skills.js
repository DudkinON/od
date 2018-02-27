import React, { Component } from 'react';
import SkillsBlock from './SkillsBlock'
import $ from 'jquery'
import { connect } from "react-redux";
import { getSkills } from '../actions/getSkills'

class Skills extends Component {

  render() {

    this.props.onGetSkills();

    function skillsCallback() {
      /**
       * In the loop run each function
       * @return void:
       */

      let elements = document.getElementsByClassName('progress-bar');
      [].forEach.call(elements, function(e) {
        const percent = e.getAttribute('aria-valuenow');
        e.style.width = percent + '%';
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
              <h3 className="skills-title">Skills</h3>
              <div className="white-icon"><i className="fas fa-file-code"/></div>
            </div>
            <SkillsBlock />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onGetSkills: () => {
      dispatch(getSkills());
    }
  })
)(Skills);