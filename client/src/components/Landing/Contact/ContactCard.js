import React, {Component} from 'react';


export class ContactCard extends Component {


  render() {
    return (
      <div className="contact__card">
        <div className="contact__icon-box">
          
        </div>
        <div className="contact__card-backface">
          <div className="contact__card-icon">
            <span className="contact__card-icon--name">{this.props.title}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;