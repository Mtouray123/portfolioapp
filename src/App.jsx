import React from 'react';
import Header from './components/header/Header';
import NavBar from './components/nav/NavBar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
