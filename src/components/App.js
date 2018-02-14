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
import * as viewportChecker from './jq.vp'
class App extends Component {

  render() {

    let scope = this;
    scope.data = Provider;
    scope.viewportChecker = viewportChecker;


    return (
      <div>
        <Header main={scope.data.header} scope={scope}/>
        <About main={scope.data.about} scope={scope}/>
        <Skills main={scope.data.skills} scope={scope}/>
        <Experience main={scope.data.experience} scope={scope}/>
        <Education main={scope.data.education} scope={scope}/>
        <Certificates url={scope.data.certificates} scope={scope}/>
        <Works url={scope.data.works} scope={scope}/>
        <Contacts social={scope.data.social} scope={scope}/>
        <Footer scope={scope}/>
      </div>
    );
  }
}

export default App;
