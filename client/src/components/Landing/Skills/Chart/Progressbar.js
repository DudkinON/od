import React, {Component} from 'react';


export class Progressbar extends Component {

  state = {
    percent: 0
  };


  interval;

  componentDidMount() {

    this.interval = setInterval(() => {

      const {percent} = this.state;

      this.setState({ percent: percent + 1 });

      if (percent === this.props.percent) {
        clearInterval(this.interval);
      }
    }, 25);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="progressbar" data-progress={this.state.percent}>
        <div className="progressbar__body">
          <div>{this.state.percent}%</div>
          <img src={this.props.img} alt={this.props.name}/>
        </div>
      </div>
    );
  }
}

export default Progressbar;