import React from 'react';
import {connect} from "react-redux";
import CertificateItem from './CertificateItem'


class CertificateBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      display: "none"
    };
  }

  toggle() {
    this.setState({ isHover: !this.state.isHover });
  }


  render() {

    const items = this.props.certificates;

    return (
      <div className="col-lg-10 row">
        {items.map( (item, i) =>
          <CertificateItem item={item} key={"certificate_key_" + i}/>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({certificates: state.certificates}),
  dispatch => ({})
)(CertificateBlock);