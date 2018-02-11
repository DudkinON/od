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
    let controller = new ScrollMagic.Controller();
    const data = Provider;


    return (
      <div>
        <Header main={data.header} controller={controller} scene={ScrollMagic.Scene}/>
        <About main={data.about} controller={controller} scene={ScrollMagic.Scene}/>
        <Skills main={data.skills} controller={controller} scene={ScrollMagic.Scene}/>
        <Experience main={data.experience} controller={controller} scene={ScrollMagic.Scene}/>
        <Education main={data.education} controller={controller} scene={ScrollMagic.Scene}/>
        <Certificates url={data.certificates} controller={controller} scene={ScrollMagic.Scene}/>
        <Works url={data.works} controller={controller} scene={ScrollMagic.Scene}/>
        <Contacts social={data.social} controller={controller} scene={ScrollMagic.Scene}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
