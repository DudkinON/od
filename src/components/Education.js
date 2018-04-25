import React, {Component} from 'react';
import {connect} from "react-redux";
import {getEducation} from "../actions/getEducation";


class Education extends Component {

  render() {

    const self = this;

    if (self.props.isMobile) {self.cls ="education"; self.clsEl = "education-item";}
    else {self.cls = "education animated invisible"; self.clsEl = "education-item animated invisible";}

    const data = this.props.education;

    if (self.props.education.title === undefined) self.props.onGetEducation(self.props.base + self.props.url);


    return (
      <section className={self.cls} id="education">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="education-title">{data.title}</h3>
              <div className="white-icon"><i className="fas fa-graduation-cap" aria-hidden="true"/></div>
            </div>
            <div className="col-lg-9">
              <div className={self.clsEl}>
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
  state => ({
    url: state.provider.education.url,
    education: state.education,
    base: state.provider.base,
    isMobile: state.mobile
  }),
  dispatch => ({
    onGetEducation: (url) => {
      dispatch(getEducation(url));
    }
  })
)(Education);