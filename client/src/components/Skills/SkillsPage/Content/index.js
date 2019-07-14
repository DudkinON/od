import React, {Component} from 'react';
import {connect} from 'react-redux';
import SkillCard from './SkillCard';


function mapStateToProps(state) {
  return {
    skills: state.skills
  };
}

export class Content extends Component {
  render() {
    return (
      <div className="skills__content">
        {this.props.skills.map(skill => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Content);