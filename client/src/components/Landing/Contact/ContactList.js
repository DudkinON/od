import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContactCard from './ContactCard';


function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

export class ContactList extends Component {
  render() {
    return (
      <div className="contact__container">
        <div className="contact__card">
          <div className="contact__wrapper">
            <ul>
              {this.props.contact.map(props => (
                <ContactCard key={props.id} {...props}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ContactList);