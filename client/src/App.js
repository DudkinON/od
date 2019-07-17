import React from 'react';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Header from './components/Header/index';
import Landing from './components/Landing/index';
import Footer from './components/Footer/index';
import About from './components/About';
import SkillsPage from './components/Skills/SkillsPage';
import Works from './components/Works';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills/*" element={<SkillsPage/>}/>
        <Route path="/works/*" element={<Works/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
