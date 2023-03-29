import React from 'react';
import Header from './components/header/Header';
import NavBar from './components/nav/NavBar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
