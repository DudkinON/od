import React, {Component} from 'react';
import Provider from './Provider';

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

      </div>
    );
  }
}

export default App;
