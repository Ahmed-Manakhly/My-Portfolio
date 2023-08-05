import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import React from 'react';
import Header from './components/Header' ;
import Intro from './components/Intro' ;
import About from './components/About' ;
import Skills from './components/Skills' ;
import Projects from './components/Projects' ;
import Contact from './components/Contact' ;
import Footer from './components/Footer' ;
//-----------------------------

function App() {
  return (
    <div className="app">
      <Header/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
