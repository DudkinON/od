import React, {Component} from 'react';
import Chart from "./Chart/index";


class SkillCategory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      skills: []
    }
  }

  showSkills = () => {
    if (this.state.skills.length > 0) this.setState({skills: []});
    else this.setState({skills: this.props.content});
  };

  render() {
    return (
      <div className="skills__category-container">
        <h3 onClick={this.showSkills} className="skills__category">{this.props.header}</h3>
        <div className="skills__body">
          {this.state.skills.map(props => (
            <div className="skills__block" key={props.name}>
              <Chart {...props}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SkillCategory;