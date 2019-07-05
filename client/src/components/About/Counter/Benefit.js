import React, {Component} from 'react';


export class Benefit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  interval;

  componentDidMount() {

    this.interval = setInterval(() => {

      const stateValue = this.state.value;
      const val = parseInt(this.props.value, 10);
      const percent = Math.round(val * 0.01);
      let value = stateValue + percent;

      if (value >= val) {
        value = val;
        clearInterval(this.interval);
      }

      this.setState({value});
    }, 25);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="about__benefit">
        <div className="about__benefit-value">{this.state.value}</div>
        <div className="about__benefit-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={this.props.view}>
            <path fill="currentColor" d={this.props.icon}/>
          </svg>
        </div>
        <div className="about__benefit-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Benefit;