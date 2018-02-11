import React, {Component} from 'react';
import Provider from './Provider';
import Header from './Header';
import About from './About';
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

      </div>
    );
  }
}

export default App;
