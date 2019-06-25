import React, {Component} from 'react';
import {connect} from 'react-redux';
import SkillCategory from './SkillCategory';
import {getSkills} from '../../../actions';


function mapStateToProps(state) {
  return {
    header: state.config.modules.landing.parts.skills.header,
    url: state.config.modules.landing.parts.skills.url,
    skills: state.skills
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetSkills: url => dispatch(getSkills(url))
  }
}

export class Skills extends Component {

  componentDidMount() {
    this.props.onGetSkills(this.props.url);
  }

  render() {
    return (
      <section className="skills">
        <div className="skills__container">
          <div className="skills__header">
            <h2 className="skills__header--text">{this.props.header}</h2>
          </div>
          {this.props.skills && this.props.skills.map(props => (
            <SkillCategory {...props} key={props.header} />
          ))}
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);