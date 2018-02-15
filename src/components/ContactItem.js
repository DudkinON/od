import React, {Component} from 'react'
import $ from "jquery";


class ContactItem extends Component {

  render() {

    const item = this.props.item;
    const id = "contact_" + this.props.i;

    $(document).ready(function () {
      $('#' + id ).viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'visible fadeInDown',
        offset: 100});
    });

    function action() {
      const strWindowFeatures = "location=yes,height=700,width=1000,scrollbars=yes,status=yes";
      let URL;
      if (item.url === 'mail@oleg-dudkin.com') URL = "mailto:" + item.url + "?Subject=The%20subject";
      else URL = item.url;
      console.log(URL);
      window.open(URL, "_blank", strWindowFeatures);
    }

    return (
      <div className="social-link animated invisible" onClick={action} id={id}>
        <i className={item.style} data-toggle="tooltip" data-placement="bottom" title={item.title}/>
      </div>
    );
  }
}

export default ContactItem;