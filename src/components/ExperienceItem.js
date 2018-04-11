import React, {Component} from 'react';
import {connect} from "react-redux";


class ExperienceItem extends Component {

  render() {

    const experience = this.props.experience;

    return (
      <div className="col-lg-9 row">
        {experience.map( (item, i) =>
          <div className="card experience-item animated invisible"
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
  state => ({experience: state.experience}),
  dispatch => ({})
)(ExperienceItem);