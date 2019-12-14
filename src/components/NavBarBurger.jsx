import React from 'react';

import { stack as Menu } from 'react-burger-menu';

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
          
            <a id="home" className="menu-item" to="/" onClick={() => this.closeMenu()}>Home</a>
          
        
            <a id="menu" className="menu-item" to="/menu" onClick={() => this.closeMenu()}>Menu</a>
            <a id="about-us" className="menu-item" to="/about" onClick={() => this.closeMenu()}>About Us</a>
            <a id="contact-us" className="menu-item" to="/contact" onClick={() => this.closeMenu()}>Contact Us</a>
        
        </Menu>
     



    )
  }
}


export default NavBarBurger