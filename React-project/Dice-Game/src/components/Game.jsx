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

  function startGame(){
    togglePlayer();
  }

  function togglePlayer(){

    const player = [...players]
    if(isNext){
      player[0].turn = true;
      player[1].turn = false;
      // console.log(player); 
    }
    else{
      player[0].turn = false;
      player[1].turn = true;
      // console.log(player); 

    }
    setPlayers(player)
    setIsNext(!isNext);
    
  }
  // console.log('original array',players);
  
  return (
    <div className='game-board'>
        <NavBar />      
        <Roll 
        players={players} setPlayers={setPlayers} togglePlayer={togglePlayer}
        />
        <button onClick={startGame}>Start Game</button>

    </div>
  )
}

export default Game
