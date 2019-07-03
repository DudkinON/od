import React, {Component} from 'react';
import Chart from "./Chart/index";


class SkillCategory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      skills: [],
      classes: "skills__body"
    }
  }

  showSkills = () => {
    if (this.state.skills.length > 0) {
      const classes = "skills__body";
      this.setState({skills: [], classes});
    } else {
      const classes = "skills__body skills__active";
      this.setState({skills: this.props.content, classes});
    }
  };

  render() {
    return (
      <div className="skills__category-container">
        <h3 onClick={this.showSkills} className="skills__category">
          <span className="skills__category_btn">
          {this.props.header}
          </span>
        </h3>
        <div className={this.state.classes}>
          {this.state.skills.map(props => (
            <div className="skills__block" key={props.id}>
              <Chart {...props}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SkillCategory;