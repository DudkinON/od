import React, { Component } from 'react';


class SkillItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    };
  }

  render() {

    const elem = this.props.elem;


    function setPercent() {
      return this.setState({ percent: elem.percent });
    }

    this.props.asyncCallback(setPercent.bind(this));

    return (
      <div className="w100">
        <h6 className="skill-title">{elem.title}</h6>
        <div className="progress">
          <div className="progress-bar progress-bar-fix" role="progressbar"
               style={{ width: this.state.percent + "%", transition : 'all 3s ease' }}
               aria-valuenow={this.state.percent} aria-valuemin="0" aria-valuemax="100">{this.state.percent}%</div>
        </div>
      </div>
    );
  }
}

export default SkillItem;