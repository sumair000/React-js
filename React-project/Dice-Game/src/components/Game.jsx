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
      disabled:false
    },
    {
      name:'player 2',
      score: 0,
      turn: false,
      disabled: false

    }
  ])

  function startGame(){
    togglePlayer();
  }

  function togglePlayer(){

    const player = [...players]
    if(!player[0].disabled && isNext){
      player[0].turn = false;
      player[1].turn = true;
      
      console.log(players); 
    }
    else if(!player[1].disabled){
      player[0].turn = true;
      player[1].turn = false;
      // console.log(player[1].score); 

    }
    setPlayers(player)
    setIsNext(!isNext);
    // console.log(player);
    
  }
  // console.log('original array',players);
  // const checkScore = players[0].score;
  // console.log('check score:', checkScore, players);
  
  // function winner(){
  //   if(players[0].score > players[1].score && players[1].disabled){
  //     console.log(`${players.name} is won`);
  //     players[0].disabled = false;
  //     players[1].disabled = false; 
  //   }  
  // }

  
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
