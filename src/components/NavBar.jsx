import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import NavBarBurger from './NavBarBurger';
// import { animateScroll as scroll } from "react-scroll";
// import { scroller } from "react-scroll";
import vkusoteria from '../site-pics/vkusoteria.jpg';
import logo from '../site-pics/logo.jpg';

function NavBar(props) {

  
    return (
     
      <header>
        <img src={vkusoteria}alt="header-image"/>
        <div className="burger-menu">
          <NavBarBurger scrollToTop={props.scrollToTop} scrollToBottom={props.scrollToBottom} scrollTo={props.scrollTo}/>
        </div>
        <div className="navbar">
        
            <div className="left-nav">
            <a href="#home" onClick={props.scrollToTop} duration={700}><img className="logo"src={logo} alt=""/></a>
            {/* <a href="#about" >За нас</a> */}

            </div>
          <div className="right-nav">
            <a href="#about" onClick={() => props.scrollTo('about', -70)}>За нас</a>
            <a href="#menu" onClick={() => props.scrollTo('menu', 100)}>Меню</a>
            <a href="#gallery" onClick={() => props.scrollTo('gallery-text', -100)}>Галерия</a>
            <a href="#contact" onClick={() => props.scrollTo('contact', -50)}>Контакт</a>
            </div>
           
        </div>
          {/* <span><p className="title">Web Developer</p></span> */}
          
        </header>
        
     
     
    )
    
   
  
}


export default NavBar