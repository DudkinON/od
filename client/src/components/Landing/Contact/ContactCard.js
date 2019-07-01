import React, {Component} from 'react';


export class ContactCard extends Component {


  open = () => {

    const {url, name} = this.props;
    const specs = 'width=800,height=600,menubar=on';
    if (url.startsWith('mailto'))
      window.location.assign(url);
    else
      window.open(url, name, specs, false);
    return false;
  };

  render() {
    return (
      <li className={this.props.className} onClick={this.open}>
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox={this.props.view}>
          <path d={this.props.icon} />
        </svg>
      </li>
    );
  }
}

export default ContactCard;