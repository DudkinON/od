import React, { Component } from 'react';


class SkillItem extends Component {

  render() {

    const self = this;
    const elem = self.props.elem;

    if (self.props.isMobile) self.width = elem.percent + '%';
    else self.width = 0;

    return (
      <div className="w100">
        <h6 className="skill-title">{elem.title}</h6>
        <div className="progress">
          <div className="progress-bar progress-bar-fix" role="progressbar" id={"skill_id_" + elem.id}
               style={{ transition : 'all 3s ease', width: self.width}}
               aria-valuenow={elem.percent} aria-valuemin="0" aria-valuemax="100">{elem.percent}%</div>
        </div>
      </div>
    );
  }
}


export default SkillItem;