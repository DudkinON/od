import React, {Component} from 'react';
import ContactItem from './ContactItem';
import {connect} from "react-redux";
import {getSocial} from "../actions/getSocial";


class Contacts extends Component {

  render() {

    const social = this.props.social;

    if (this.props.social.length < 1) this.props.onGetSocial(this.props.base + this.props.url);


    return (
      <section className="contact-container animated invisible" id="contacts">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-2">
              <h3 className="title contact-title">contact</h3>
              <div className="icon"><i className="fa fa-globe" aria-hidden="true" /></div>
            </div>
            <div className="col-md-8 col-lg-10">
              <div className="contact">
                <nav className="social-icon">
                  {social.map( (item, i) =>
                    <ContactItem item={item} key={"social_" + i} i={i}/>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({url: state.provider.social.url, social: state.social, base: state.provider.base}),
  dispatch => ({
    onGetSocial: (url) => {
      dispatch(getSocial(url));
    }
  })
)(Contacts);