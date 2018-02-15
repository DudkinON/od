import React from 'react'
import $ from "jquery";


class CertificateItem extends React.Component {

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

    const item = this.props.item;
    const id = "card_" + this.props.i;
    let context;

    if (this.state.isHover) {
      context = 1;
    } else {
      context = 0;
    }

    $(document).ready(
     function () {
       $('#' + id ).viewportChecker({
         classToRemove: 'invisible',
         classToAdd: 'visible fadeInDown',
         offset: 100});
     }
    );

    function showCertificate() {
      const strWindowFeatures = "location=yes,width=800,height=600,scrollbars=yes,status=yes";
      let URL = item.link;
      window.open(URL, "_blank", strWindowFeatures);
    }

    return (
      <div className="col-sm-12 col-md-6 text-center animated invisible" id={id} onClick={showCertificate}
           onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
        <div className="card-item">
          <img src={item.img} alt={item.title} width="480" height="300"/>
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