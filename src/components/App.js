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
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fa/css/fontawesome-all.min.css';
import 'animate.css'
import './App.css';
import './jq.vp';

class App extends Component {

  render() {

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
  state => ({provider: state.provider}),
  dispatch => ({})
)(App);
