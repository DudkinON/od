import React, {Component} from 'react';
import $ from "jquery";

class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      right: "-100%",
      display: "none",
      itemClass: "card experience-item animated"
    };
  }

  render() {

    const data = this.props.main;

    let self = this;

    function experienceCallback() {
      this.setState({
        right: "0",
        display: "block",
        itemClass: "card experience-item animated appear-animated"
      });
    }


    $(document).ready(function(){
      $('#experience').viewportChecker({callbackFunction: experienceCallback.bind(self), offset: 300});
    });

    return (
      <section className="experience animated" id="experience" style={{right: this.state.right}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="experience-title">{data.title}</h3>
              <div className="icon"><i className="fas fa-briefcase"/></div>
            </div>
            <div className="col-lg-9 row">
              {data.list.map((item, i) =>
                <div className={self.state.itemClass} key={"place_" + i}
                     style={{display: this.state.display}}>
                  <div className="experience-name animated">{item.title}</div>
                  <em>from: {item.start}, to: {item.end}</em>
                  <div className="experience-job">{item.description}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;