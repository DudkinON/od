import React, {Component} from 'react'
import $ from "jquery";


class Footer extends Component {

  render() {

    $(document).ready(function(){
      $('#footer').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'visible zoomIn',
        offset: 10});
    });

    return (
      <footer className="invisible" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer">
                <span>Design by Oleg Dudkin</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;