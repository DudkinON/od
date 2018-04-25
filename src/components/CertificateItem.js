import React from 'react';
import {redirect} from "../actions/redirect";


class CertificateItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
  }

  toggle() {
    this.setState({ isHover: !this.state.isHover });
  }


  render() {

    const self = this;

    if (self.props.isMobile) self.cls = "col-sm-12 col-md-6 text-center certificate";
    else self.cls = "col-sm-12 col-md-6 text-center certificate animated invisible";

    const item = this.props.item;
    let context;

    if (this.state.isHover) {
      context = 1;
    } else {
      context = 0;
    }

    return (
      <div className={self.cls}
         onClick={redirect(item.url)}
         onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
        <div className="card-item">
          <img src={item.images} alt={item.title} />
          <div className="card-container animated" style={{opacity: context}}>
            <h6>{item.title}</h6>
            <span>{item.description}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CertificateItem;