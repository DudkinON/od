import React, {Component} from 'react';
import {redirect} from '../actions/redirect';


class ContactItem extends Component {

  render() {

    const item = this.props.item;


    return (
      <div className="social-link animated invisible" onClick={redirect(item.url)}>
        <i className={item.style} data-toggle="tooltip" data-placement="bottom" title={item.title}/>
      </div>
    );
  }
}

export default ContactItem;