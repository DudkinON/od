import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Progressbar extends Component {

  state = {
    percent: 0
  };


  interval;

  componentDidMount() {

    this.interval = setInterval(() => {

      const {percent} = this.state;
      if (percent === this.props.percent)
        clearInterval(this.interval);
      else
        this.setState({percent: percent + 1});

    }, 25);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="progressbar" data-progress={this.state.percent}>
        <Link to={this.props.url} className="progressbar__link">
          <div className="progressbar__body">
            <div>{this.state.percent}%</div>
            <div className="progressbar__icon-container">
              <svg xmlns="http://www.w3.org/2000/svg"
                   viewBox={this.props.view}
                   className="progressbar__icon">
                <path d={this.props.img}/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Progressbar;