import React, {Component} from 'react';
import {connect} from "react-redux";


class About extends Component {
  render() {

    const data = this.props.about;

    return (
      <section className="about appear-animated" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="about-title">{this.props.title}</h3>
              <div className="icon">
                <i className="fas fa-user"/>
              </div>
            </div>
            <div className="col-lg-9">
              <h2 className="about-name">{data.name}</h2>
              <div className="about-description">{data.description}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({about: state.info, title: state.provider.about.title}),
  dispatch => ({})
)(About);