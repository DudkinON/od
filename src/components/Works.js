import React, {Component} from 'react'
import WorkElement from "./WorkElement";
import {connect} from "react-redux";
import {getWorks} from "../actions/getWorks";


class Works extends Component {


  render() {

    const self = this;

    if (self.props.isMobile) self.cls = "works";
    else self.cls = "works animated invisible";

    self.props.onGetWorks(self.props.base + self.props.works.url);


    return (
      <section className={self.cls} id="works">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <h3 className="skills-title">{self.props.works.title}</h3>
              <div className="white-icon"><i className="fas fa-file-code"/></div>
            </div>
            <WorkElement />
          </div>
        </div>
      </section>
    );

  }
}

export default connect(
  state => ({works: state.provider.works, base: state.provider.base, isMobile: state.mobile}),
  dispatch => ({
    onGetWorks: (url) => {
      dispatch(getWorks(url));
    }
  })
)(Works);