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

    const item = this.props.item;
    let context;

    if (this.state.isHover) {
      context = 1;
    } else {
      context = 0;
    }

    return (
      <div className="col-sm-12 col-md-6 text-center certificate animated invisible"
         onClick={redirect(item.url)}
         onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
        <div className="card-item">
          <img src={item.images} alt={item.title} width="480" height="300"/>
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