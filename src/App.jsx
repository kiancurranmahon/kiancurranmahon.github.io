import React from "react";
// Importing Componenets
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <div className="under-construction-banner">
        🚧 This site is under construction 🚧
      </div>
      <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
</>    
  );
};

export default App;
