import React from 'react';
import CertificateBlock from './CertificateBlock';
import {connect} from "react-redux";
import {getCertificate} from "../actions/getCertificate";


class Certificates extends React.Component {


  render() {

    const self = this;

    if (self.props.isMobile) self.cls = "certificates";
    else self.cls = "certificates animated invisible";

    self.props.onGetCertificate(self.props.base + self.props.certificates.url);


    return (
      <section className={self.cls} id="certificate">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 mr-4">
              <h3 className="certificates-title">{self.props.certificates.title}</h3>
              <div className="icon text-center"><i className="fas fa-certificate" aria-hidden="true" /></div>
            </div>
            <CertificateBlock />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({certificates: state.provider.certificates, base: state.provider.base, isMobile: state.mobile}),
  dispatch => ({
    onGetCertificate: (url) => {
      dispatch(getCertificate(url));
    }
  })
)(Certificates);