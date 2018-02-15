import React, {Component} from 'react';
import $ from "jquery";

class ExperienceItem extends Component {

  render() {

    const item = this.props.item;
    const id = "place_" + this.props.i;

    $(document).ready(function(){
      $('#' + id).viewportChecker({classToRemove: 'invisible', classToAdd: 'visible fadeInUp', offset: 300});
    });

    return (
      <div className="card experience-item animated invisible" id={id}>
        <div className="experience-name animated">{item.title}</div>
        <em>from: {item.start}, to: {item.end}</em>
        <div className="experience-job">{item.description}</div>
      </div>
    );
  }
}

export default ExperienceItem;