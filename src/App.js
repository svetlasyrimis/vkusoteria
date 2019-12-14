import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Section from "./components/Section"
import BurgerMenu from './components/BurgerMenu';
import NavBarBurger from './components/NavBarBurger';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <BurgerMenu/> */}
         <Section />
      </div>
    );
  }
  
}

export default App;
