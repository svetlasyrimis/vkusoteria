import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Section from "./components/Section"
import BurgerMenu from './components/BurgerMenu';
import NavBarBurger from './components/NavBarBurger';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  }
  
  scrollTo(element,offset) {
    scroller.scrollTo(element, {
      activeClass:"active",
      duration: 700,
      delay: 0,
      // smooth: true,
      spy: true,
      smooth: 'easeInOutQuart',
      offset: offset
    })
  }


  render() {
    return (
      <div className="App">
        <NavBar scrollToTop={this.scrollToTop} scrollToBottom={this.scrollToBottom} scrollTo={this.scrollTo}/>
        {/* <BurgerMenu/> */}
        <Section />
        <p className="gallery-text">Gallery</p>
        <Gallery />
        <Contact />
        <Footer />
      </div>
    );
  }
  
}

export default App;
