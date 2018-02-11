import React from 'react'


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
      context = '';
    } else {
      context = 'none';
    }

    function showCertificate() {
      const strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
      let URL = item.link;
      window.open(URL, "_blank", strWindowFeatures);
    }

    return (
      <div className="col-sm-12 col-md-6 text-center" id="card" onClick={showCertificate}
           onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
        <div className="card-item">
          <img src={item.img} alt={item.title} />
          <div className='card-container' style={{display: context}}>
            <h6>{item.title}</h6>
            <span>{item.description}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CertificateItem;