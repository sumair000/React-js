import React, { useState } from 'react'
import './Game.css'

import Player from './Player'
import Dice from './Dice'
import NavBar from './NavBar'
import Roll from './Roll'

const Game = () => {

  const [isNext, setIsNext] = useState(true);
  const [players, setPlayers] = useState([
    {
      name:'player 1',
      score: 0,
      turn: false,
      win: false
    },
    {
      name:'player 2',
      score: 0,
      turn: false,
      win: false
    }
  ])

  function handleClick(){

    const player = [...players]
    if(isNext){
      player[0].turn = true;
      console.log(player); 
    }
    else{
      player[1].turn = true;
    }
    setIsNext(!isNext);
  }
  
  return (
    <div className='game-board'>
        <NavBar />      
        <Roll/>
        <button onClick={handleClick}>Toss</button>

    </div>
  )
}

export default Game
