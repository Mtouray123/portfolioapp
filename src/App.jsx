import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <About />
      <Navbar />
      {/* <Intro /> */}
      <Experience />
      {/* <Works /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;