import React, {Component} from 'react';
import {connect} from 'react-redux';
import SkillCategory from './SkillCategory';
import {getCategories} from '../../../actions';


function mapStateToProps(state) {
  return {
    header: state.config.modules.landing.parts.skills.header,
    url: state.config.modules.landing.parts.skills.url,
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetCategories: url => dispatch(getCategories(url))
  }
}

export class Skills extends Component {

  componentDidMount() {
    this.props.onGetCategories(this.props.url);
  }

  render() {
    return (
      <section className="skills">
        <div className="skills__container">
          <div className="skills__header">
            <h2 className="skills__header--text">{this.props.header}</h2>
          </div>
          {this.props.categories && this.props.categories.map(props => (
            <SkillCategory {...props} key={props.header} />
          ))}
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);