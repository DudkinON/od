import React, { Component } from 'react';
import SkillsBlock from './SkillsBlock';
import { connect } from "react-redux";
import { getSkills } from '../actions/getSkills'

class Skills extends Component {

  render() {

    this.props.onGetSkills(this.props.base + this.props.skills.url);


    return (
      <section className="skills animated invisible" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <h3 className="skills-title">{this.props.skills.title}</h3>
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
  state => ({skills: state.provider.skills, base: state.provider.base}),
  dispatch => ({
    onGetSkills: (url) => {
      dispatch(getSkills(url));
    }
  })
)(Skills);