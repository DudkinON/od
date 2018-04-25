import React, {Component} from 'react';
import ContactItem from './ContactItem';
import {connect} from "react-redux";
import {getSocial} from "../actions/getSocial";


class Contacts extends Component {

  render() {

    const self = this;

    if (self.props.isMobile) self.cls = "contact-container" ;
    else self.cls = "contact-container animated invisible" ;

    const social = self.props.social;

    if (self.props.social.length < 1) self.props.onGetSocial(self.props.base + self.props.url);


    return (
      <section className={self.cls} id="contacts">
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
                    <ContactItem item={item} key={"social_" + i} i={i} isMobile={self.props.isMobile}/>
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
  state => ({
    url: state.provider.social.url,
    social: state.social,
    base: state.provider.base,
    isMobile: state.mobile
  }),
  dispatch => ({
    onGetSocial: (url) => {
      dispatch(getSocial(url));
    }
  })
)(Contacts);