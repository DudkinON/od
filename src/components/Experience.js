import React, {Component} from 'react';
import ExperienceItem from './ExperienceItem';
import {connect} from "react-redux";
import {getExperience} from "../actions/getExperience";

class Experience extends Component {

  render() {

    const self = this;

    if (self.props.isMobile) self.cls = "experience";
    else self.cls = "experience animated invisible";

    self.props.onGetExperience(self.props.base + self.props.experience.url);

    return (
      <section className={self.cls} id="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="experience-title">{self.props.experience.title}</h3>
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
  state => ({experience: state.provider.experience, base: state.provider.base, isMobile: state.mobile}),
  dispatch => ({
    onGetExperience: (url) => {
      dispatch(getExperience(url));
    }
  })
)(Experience);