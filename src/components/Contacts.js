import React, {Component} from 'react'
import ContactItem from './ContactItem'
import $ from "jquery";


class Contacts extends Component {

  render() {

    const social = this.props.social;

    $(document).ready(function(){
      $('#contacts').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'visible fadeInRight',
        offset: 300});
    });

    return (
      <section className="contact-container animated invisible" id="contacts">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-2">
              <h3 className="title contact-title">contact</h3>
              <div className="icon"><i className="fa fa-globe" aria-hidden="true" /></div>
            </div>
            <div className="col-md-8 col-lg-10">
              <div className="contact">
                <nav className="social-icon">
                  {social.map( (item, i) =>
                    <ContactItem item={item} key={"social_" + i} i={i}/>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;