import React, {Component} from 'react';
import {connect} from "react-redux";


class Footer extends Component {

  render() {
    const self = this;

    if (self.props.isMobile) self.cls = "";
    else self.cls = "invisible";

    return (
      <footer className={self.cls} id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer">
                <span>{this.props.copyright}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default connect(
  state => ({copyright: state.provider.copyright, isMobile: state.mobile}),
  dispatch => ({})
)(Footer);
