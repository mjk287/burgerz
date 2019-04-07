import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    type: 'All',
    burgers: []
  }

  handleBurgerFilter = (e) => {
    this.setState({
      type: e.target.value
    }, () => this.filterBurgers())


  }

  filterBurgers = () => {
    switch(this.state.type){
      case 'All':
        this.setState({
          burgers: this.state.burgers
        })
        break
      case 'Relatable':
        this.setState({
          burgers: this.state.burgers.filter((burger) => {
            return burger.category === 'Relatable'
          })
        })
        break
      case 'Bougie':
        this.setState({
          burgers: this.state.burgers.filter((burger) => {
            return burger.category === 'Bougie'
          })
        })
        break
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/burgers')
    .then(resp => resp.json())
    .then(parsedResp => {
      this.setState({
        burgers: parsedResp
      })
    })
  }

  render(){

    return (
      <div className="BurgerContainer">
        <BurgerFilter handleChange={this.handleBurgerFilter} />
        <BurgerList burgers={this.state.burgers} handleClick={this.props.handleClick}/>
      </div>
    )
  }
}
