import React, {Component} from 'react'
import WorkElement from "./WorkElement";
import {connect} from "react-redux";
import {getWorks} from "../actions/getWorks";


class Works extends Component {


  render() {

    this.props.onGetWorks(this.props.base + this.props.works.url);


    return (
      <section className="works animated invisible" id="works">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <h3 className="skills-title">{this.props.works.title}</h3>
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
  state => ({works: state.provider.works, base: state.provider.base}),
  dispatch => ({
    onGetWorks: (url) => {
      dispatch(getWorks(url));
    }
  })
)(Works);