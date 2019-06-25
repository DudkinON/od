import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/index';
import Landing from './components/Landing/index';
import Footer from './components/Footer/index';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Landing}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
