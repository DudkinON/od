import React, {Component} from 'react';
import {connect} from "react-redux";
import {getEducation} from "../actions/getEducation";


class Education extends Component {

  render() {

    const data = this.props.education;

    if (this.props.education.title === undefined) this.props.onGetEducation(this.props.base + this.props.url);


    return (
      <section className="education animated invisible" id="education">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="education-title">{data.title}</h3>
              <div className="white-icon"><i className="fas fa-graduation-cap" aria-hidden="true"/></div>
            </div>
            <div className="col-lg-9">
              <div className="education-item animated invisible">
                <h4>{data.name}</h4>
                <span>{data.description}</span>
                <p>{data.specialisation}</p>
                <em>from: {data.start}, to: {data.end} | </em>
                <span className="education-place">
                  <a href={data.url} target="_blank">website</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({url: state.provider.education.url, education: state.education, base: state.provider.base}),
  dispatch => ({
    onGetEducation: (url) => {
      dispatch(getEducation(url));
    }
  })
)(Education);