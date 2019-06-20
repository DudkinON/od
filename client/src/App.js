import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './components/Landing';
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Route exact to="/" component={Landing}/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
