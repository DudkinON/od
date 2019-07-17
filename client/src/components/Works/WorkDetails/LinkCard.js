import React, {Component} from 'react';


export class LinkCard extends Component {

  open = () => {
    const {url} = this.props;
    const specs = 'width=800,height=600';
    window.open(url, "", specs, false)
  };

  render() {
    return (
      <div className="work-details__link-card">
        <div className="work-details__link-card--icon"
             onClick={this.open}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={this.props.icon.view}>
            <path fill="currentColor" d={this.props.icon.icon}/>
          </svg>
        </div>
      </div>
    );
  }
}

export default LinkCard;