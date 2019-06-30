import React, {Component} from 'react';
import {connect} from 'react-redux';
import CertificateBlock from './CertificateBlock';

function mapStateToProps(state) {
  return {
    certificates: state.certificates,
    button: state.config.modules.landing.parts.certificates.button
  };
}

export class CertificateList extends Component {
  render() {
    const {button} = this.props;
    return (
      <div className="certificates__content">
        {this.props.certificates.map(cert => (
          <CertificateBlock {...cert} button={button} key={cert.id}/>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(CertificateList);