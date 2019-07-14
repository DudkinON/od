import React, {Component} from 'react';
import {connect} from 'react-redux';
import Content from './Content';
import {getSkills} from '../../../actions';


function mapStateToProps(state) {
  return {
    skills: state.skills,
    header: state.config.modules.skills.header,
    url: state.config.modules.skills.url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetSkills: url => dispatch(getSkills(url))
  };
}

export class SkillsPage extends Component {

  componentDidMount() {
    if (this.props.skills.length === 0)
      this.props.onGetSkills(this.props.url);
  }

  render() {
    return (
      <div className="skills-page">
        <Content />
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SkillsPage);