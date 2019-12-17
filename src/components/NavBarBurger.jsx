import React from 'react';

import { bubble as Menu } from 'react-burger-menu';
import { animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";

class NavBarBurger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }))
  }

  closeAllMenusOnEsc = (e) => {
    e = e || window.event;

    if (e.key === 'Escape' || e.keyCode === 27) {
      this.setState({ menuOpen: false });
    }

    this.closeMenu()
  };

  render() {


    return (

     
       
        <Menu left disableAutoFocus isOpen={this.state.menuOpen} customOnKeyDown={this.closeAllMenusOnEsc} 
          onStateChange={(state) => { this.handleStateChange(state) }} onClick={()=> this.closeMenu()}>
            <a href="#home" onClick={this.props.scrollToTop} duration={700}>Начало</a>
        <a  className="menu-item" to="/about" onClick={() => { this.closeMenu(); this.props.scrollTo('about', -80) }}>За Нас</a>
          
        
            <a id="#menu" className="menu-item" to="/menu" onClick={() => this.closeMenu()}>Меню</a>
        <a id="#gallery" className="menu-item" to="/gallery" onClick={() => { this.closeMenu();this.props.scrollTo('gallery', -80) }}>Галерия</a>
        <a id="#contact" className="menu-item" to="/contact" onClick={() => {this.closeMenu(); this.props.scrollTo('contact', -80)} }>Контакт</a>
        
        </Menu>
     



    )
  }
}


export default NavBarBurger