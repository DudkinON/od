import React from 'react';
import CertificateBlock from './CertificateBlock';
import {connect} from "react-redux";
import {getCertificate} from "../actions/getCertificate";


class Certificates extends React.Component {


  render() {

    this.props.onGetCertificate(this.props.certificates.url);


    return (
      <section className="certificates animated invisible" id="certificate">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 mr-4">
              <h3 className="certificates-title">{this.props.certificates.title}</h3>
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
  state => ({certificates: state.provider.certificates}),
  dispatch => ({
    onGetCertificate: (url) => {
      dispatch(getCertificate(url));
    }
  })
)(Certificates);