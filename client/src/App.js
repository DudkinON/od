import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
