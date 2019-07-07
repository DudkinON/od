import React, {Component} from 'react';


export class InterestCard extends Component {

  open = () => {
    const {url, text} = this.props;
    const specs = 'width=1024,height=600';
    window.open(url, text, specs, false)
  };

  render() {
    return (
      <div className="about__interest-card" onClick={this.open}>
        <div className="about__interest-card--icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={this.props.view}>
            <path fill="currentColor" d={this.props.icon}/>
          </svg>
        </div>
        <div className="about__interest-card--text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default InterestCard;