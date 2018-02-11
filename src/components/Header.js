import React, {Component} from 'react';


class Header extends Component {
  render() {
    const data = this.props.main;
    function about() {
      return window.location.assign('/#about');
    }

    return (
      <header className="first-selection appear-animated" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="first-header">{data.title}</h1>
              <hr className="first-hr"/>
              <div className="first-slogan">{data.slogan}</div>
              <h2 className="first-description">
                <span>{data.description}</span>
              </h2>
              <div className="arrow-block">
                <div className="content">
                  <svg id="more-arrows" onClick={about}>
                    <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                    <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                    <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;