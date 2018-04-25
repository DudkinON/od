import React, {Component} from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Certificates from './Certificates';
import Works from './Works';
import Contacts from './Contacts';
import Footer from './Footer';
import { runAnimation } from '../actions/runAnimation';
import { mainCallback } from '../actions/mainCallback';
import { skillsCallback } from '../actions/skillsCallback';
import { educationCallback } from '../actions/educationCallback';
import { worksCallback } from '../actions/worksCallback';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fa/css/fontawesome-all.min.css';
import 'animate.css';
import './App.css';
import $ from "jquery";
import './jq.vp';

class App extends Component {

  render() {
    const self = this;

    $(document).ready(function(){
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      & window.screen.width < 760 && window.screen.height < 760) {
        self.props.onIsMobile();
      } else {
        runAnimation('#skills', 'fadeInLeft', skillsCallback);
        runAnimation('#experience', 'fadeInRight', mainCallback('experience-item', 'fadeInUp'));
        runAnimation('#education', 'fadeInLeft', educationCallback);
        runAnimation('#certificate', 'fadeInRight', mainCallback('certificate', 'fadeInDown'));
        runAnimation('#works', 'fadeInLeft', worksCallback);
        runAnimation('#contacts', 'fadeInRight', mainCallback('social-link', 'zoomIn'));
        runAnimation('#footer', 'zoomIn', () => {}, 10);
      }
    });

    return (
      <div>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Works />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => ({provider: state.provider, isMobile: state.mobile}),
  dispatch => ({onIsMobile: () => {dispatch({type: 'IS_MOBILE', payload: true})}})
)(App);
