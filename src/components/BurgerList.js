import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  const makeBurgerList = () => {
    return props.burgers.map(burger => {
      return <BurgerItem burger={burger} handleClick={props.handleClick}/>
    })
  }

  return (
    <div className="BurgerList">
      {makeBurgerList()}
    </div>
  )
}

export default BurgerList
