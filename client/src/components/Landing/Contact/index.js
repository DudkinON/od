import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getContact} from '../../../actions';
import ContactList from './ContactList';


function mapStateToProps(state) {
  return {
    header: state.config.modules.landing.parts.contact.header,
    url: state.config.modules.landing.parts.contact.url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetContact: url => dispatch(getContact(url))
  }
}

export class Contact extends Component {

  componentDidMount() {
    this.props.onGetContact(this.props.url);
  }

  render() {
    return (
      <section className="contact">
        <div className="contact__header">
          <h2 className="contact__header--text">{this.props.header}</h2>
        </div>
        <ContactList/>
      </section>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Contact);