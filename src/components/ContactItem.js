import React, {Component} from 'react';
import {redirect} from '../actions/redirect';


class ContactItem extends Component {

  render() {

    const self = this;

    if (self.props.isMobile) self.cls = "social-link";
    else self.cls = "social-link animated invisible";

    const item = self.props.item;


    return (
      <div className={self.cls} onClick={redirect(item.url)}>
        <i className={item.style} data-toggle="tooltip" data-placement="bottom" title={item.title}/>
      </div>
    );
  }
}

export default ContactItem;