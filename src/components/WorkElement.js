import React from 'react'
import $ from "jquery";


class WorkElement extends React.Component {

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
    const id = "work_" + this.props.i;

    let context;

    if (this.state.isHover) {
      context = 1;
    } else {
      context = 0;
    }

    $(document).ready(function () {
      $('#' + id ).viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'visible fadeInUp',
        offset: 100});
    });

    function showWork() {
      const strWindowFeatures = "location=yes,height=700,width=1000,scrollbars=yes,status=yes";
      let URL = item.link;
      console.log(URL);
      window.open(URL, "_blank", strWindowFeatures);
    }

    return (
      <div className="col-sm-12 col-md-6 text-center" id={id}>
        <div className="card-item" style={{backgroundImage: item.img}} onClick={showWork}
             onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
          <img src={item.img} alt={item.title} />
          <div className="card-container animated" style={{opacity: context}}>
            <h6>{item.title}</h6>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkElement;