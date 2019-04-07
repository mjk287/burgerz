import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgerToDisplay: {
      name: 'Choose Something',
      category: 'You Better Choose Something',
      imgURL: 'https://images-na.ssl-images-amazon.com/images/I/61fJuUgjXyL._SX355_.jpg'
    }
  }

  handleBurgerDisplay = (burgerObj) => {
    this.setState({
      burgerToDisplay: burgerObj
    })
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgers} handleClick={this.handleBurgerDisplay}/>
        <BurgerDisplay burger={this.state.burgerToDisplay}/>
      </div>
    );
  }
}

export default App;
