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
        <div className="certificates__view">
          <img
            src={this.props.img} className="certificates__view-img"
            alt={this.props.title}/>
          <div className="certificates__view-mask">
            <h2 className="certificates__view-header">{this.props.title}</h2>
            <p className="certificates__view-description">{this.props.description}</p>
            <div onClick={this.url} className="certificates__view-link">Read More</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CertificateBlock;