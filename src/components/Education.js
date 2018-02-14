import React, {Component} from 'react';
import $ from "jquery";

class Education extends Component {

  constructor(props) {
    super(props);
    this.state = {
      left: "-100%",
      textClass: "education-item",
    };
  }


  render() {

    const data = this.props.main;

    let self = this;

    function educationCallback() {
      self.setState({
        left: "0",
        textClass: "education-item appear-animated"
      });
    }

    $(document).ready(function(){
      $('#education').viewportChecker({callbackFunction: educationCallback.bind(self), offset: 300});
    });


    return (
      <section className="education animated" id="education" style={{left: self.state.left}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="education-title">{data.title}</h3>
              <div className="white-icon"><i className="fas fa-graduation-cap" aria-hidden="true"/></div>
            </div>
            <div className="col-lg-9">
              <div className={this.state.textClass}>
                <h4>{data.name}</h4>
                <span>{data.description}</span>
                <p>{data.specialisation}</p>
                <em>from: {data.start}, to: {data.end} | </em>
                <span className="education-place">
                  <a href={data.url} target="_blank">website</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;