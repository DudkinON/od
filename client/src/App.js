import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/index';
import Landing from './components/Landing/index';
import Footer from './components/Footer/index';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/works" component={Works}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
