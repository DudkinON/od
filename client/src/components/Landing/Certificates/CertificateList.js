import React, {Component} from 'react';
import {connect} from 'react-redux';
import CertificateBlock from './CertificateBlock';

function mapStateToProps(state) {
  return {
    certificates: state.certificates
  };
}

export class CertificateList extends Component {
  render() {
    return (
      <div className="certificates__content">
        {this.props.certificates.map(cert => (
          <CertificateBlock {...cert} key={cert.id} />
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(CertificateList);