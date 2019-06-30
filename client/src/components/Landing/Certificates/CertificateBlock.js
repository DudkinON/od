import React, {Component} from 'react';


export class CertificateBlock extends Component {

  url = () => {
    const {url, title} = this.props;
    const specs = 'width=800,height=600';
    window.open(url, title, specs, false)
  };

  render() {
    return (
      <div className="certificates__block">
        <figure className="certificates__thumb" onClick={this.url}>
          <img
            src={this.props.img} className=""
            alt={this.props.title}/>
          <figcaption>
            <div className="certificates__description">{this.props.description}</div>
            <div className="certificates__thumb-header">{this.props.title}</div>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default CertificateBlock;