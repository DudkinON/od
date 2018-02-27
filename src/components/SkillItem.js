import React, { Component } from 'react';
import { connect } from 'react-redux';


class SkillItem extends Component {

  render() {

    const elem = this.props.elem;

    return (
      <div className="w100">
        <h6 className="skill-title">{elem.title}</h6>
        <div className="progress">
          <div className="progress-bar progress-bar-fix" role="progressbar" id={"skill_id_" + elem.id}
               style={{ transition : 'all 3s ease', width: 0}}
               aria-valuenow={elem.percent} aria-valuemin="0" aria-valuemax="100">{elem.percent}%</div>
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({}),
  dispatch => ({})
)(SkillItem);