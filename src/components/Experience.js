import React, {Component} from 'react';
import ExperienceItem from './ExperienceItem';
import {connect} from "react-redux";
import {getExperience} from "../actions/getExperience";

class Experience extends Component {

  render() {

    this.props.onGetExperience(this.props.base + this.props.experience.url);

    return (
      <section className="experience animated invisible" id="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="experience-title">{this.props.experience.title}</h3>
              <div className="icon"><i className="fas fa-briefcase"/></div>
            </div>
            <ExperienceItem />
          </div>
        </div>
      </section>
    );
  }
}


export default connect(
  state => ({experience: state.provider.experience, base: state.provider.base}),
  dispatch => ({
    onGetExperience: (url) => {
      dispatch(getExperience(url));
    }
  })
)(Experience);