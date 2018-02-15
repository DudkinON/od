import React, {Component} from 'react';
import $ from "jquery";
import ExperienceItem from './ExperienceItem'

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

    $(document).ready(function(){
      $('#experience').viewportChecker({classToRemove: 'invisible', classToAdd: 'visible fadeInRight', offset: 300});
    });

    return (
      <section className="experience animated invisible" id="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="experience-title">{data.title}</h3>
              <div className="icon"><i className="fas fa-briefcase"/></div>
            </div>
            <div className="col-lg-9 row">
              {data.list.map((item, i) =>
                <ExperienceItem key={"place_" + i} i={i} item={item}/>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;