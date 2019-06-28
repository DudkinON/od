import React, {Component} from 'react';
import {connect} from 'react-redux';
import CertificateList from './CertificateList';
import {getCertificates} from "../../../actions";

function mapStateToProps(state) {
  return {
    header: state.config.modules.landing.parts.certificates.header,
    url: state.config.modules.landing.parts.certificates.url
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onGetCertificates: url => dispatch(getCertificates(url))
  }
}

export class Certificates extends Component {

  componentDidMount() {
    this.props.onGetCertificates(this.props.url);
  }

  render() {
    return (
      <section className="certificates">
        <div className="certificates__header">
          <h1 className="certificates__header--text"
          >{this.props.header}</h1>
        </div>
        <div className="certificates__container">
          <CertificateList />
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Certificates);