import React, {Component} from 'react';
import {connect} from "react-redux";


class ExperienceItem extends Component {

  render() {
    const self = this;

    const experience = self.props.experience;

    if (self.props.isMobile) self.cls = "card experience-item";
    else self.cls = "card experience-item animated invisible";

    return (
      <div className="col-lg-9">
        {experience.map( (item, i) =>
          <div className={self.cls}
               id={"experience_" + i}
               key={"experience_key_" + i}>
            <div className="experience-name animated">{item.title}</div>
            <em>from: {item.start}, to: {item.end}</em>
            <div className="experience-job">{item.description}</div>
          </div>
        )}
      </div>
    );
  }
}


export default connect(
  state => ({experience: state.experience, isMobile: state.mobile}),
  dispatch => ({})
)(ExperienceItem);