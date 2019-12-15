import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import NavBarBurger from './NavBarBurger'
import vkusoteria from '../site-pics/vkusoteria.jpg';

function NavBar() {
  

  
    return (
     
      <header>
        <img src={vkusoteria}alt="header-image"/>
        <div className="burger-menu">
          <NavBarBurger />
        </div>
        <div className="navbar">
        
            <div className="left-nav">
           
            <a href="/">За нас</a>

            </div>
          <div className="right-nav">
            <a href="/menu">Меню</a>
            <a href="/gallery">Галерия</a>
            <a href="/contact">Контакт</a>
            </div>
           
        </div>
          {/* <span><p className="title">Web Developer</p></span> */}
          
        </header>
        
     
     
    )
  
}


export default NavBar