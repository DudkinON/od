import React, {Component} from 'react';
import Provider from './Provider';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Certificates from './Certificates';
import Works from './Works'
import Contacts from './Contacts'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './fa/css/fontawesome-all.min.css';
import './App.css';
import * as ScrollMagic from "scrollmagic";

class App extends Component {


  render() {

    let scope = this;
    scope.controller = new ScrollMagic.Controller();
    scope.data = Provider;


    return (
      <div>
        <Header main={scope.data.header} controller={scope.controller} scene={ScrollMagic.Scene}/>
        <About main={scope.data.about} controller={scope.controller} scene={ScrollMagic.Scene}/>
        <Skills main={scope.data.skills} controller={scope.controller} scene={ScrollMagic.Scene}/>
        <Experience main={scope.data.experience} controller={scope.controller} scene={ScrollMagic.Scene}/>
        <Education main={scope.data.education} controller={scope.controller} scene={ScrollMagic.Scene}/>
        <Certificates url={scope.data.certificates} controller={scope.controller} scene={ScrollMagic.Scene}/>
        <Works url={scope.data.works} controller={scope.controller} scene={ScrollMagic.Scene}/>
        <Contacts social={scope.data.social} controller={scope.controller} scene={ScrollMagic.Scene}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
