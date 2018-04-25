import React, {Component} from 'react';
import SkillItem from './SkillItem'
import {connect} from "react-redux";


class SkillsBlock extends Component {


  render() {

    const data = this.props.skills;

    let block;

    if (data.length) {
      block = (
        <div className="col-lg-10 row-separator">
          {data.map((item, i) =>
            <div className="col-md-6 row skill-offset" key={"skill_" + i}>
              <div className="skills-header">{item.title}</div>
              {item.skills.map( (elem, j) =>
                <SkillItem elem={elem} key={j} isMobile={this.props.isMobile} />
              )}
            </div>
          )}
        </div>
      );
    } else {
      block = (
        <div className="col-lg-10 row-separator">
          <h3 className="text-danger">Server is unavailable</h3>
        </div>
      );
    }

    return block;
  }
}

export default connect(
  state => ({skills: state.skills, isMobile: state.mobile}),
  dispatch => ({})
)(SkillsBlock);