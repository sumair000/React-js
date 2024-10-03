import React, { useState } from 'react'
import Dice from './Dice';

import './Roll.css'

const Roll = ({players, setPlayers}) => {

    
    const [diceValue, setDiceValue] = useState(1);
    function rollDice(){
        console.log(players);
        
        const newValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newValue);

        const updatedPlayer = players.map(player => {
            if (player.turn) {
                console.log('inside if conditon');
                
                return {...player, score:player.score + newValue};
            }
            return player;
        })
        setPlayers(updatedPlayer)
        console.log(updatedPlayer);
        
    }
  return (
    <div className='roll-container'>
      <button className='roll-btn' onClick={rollDice}>Roll Dice</button>
      <Dice diceValue={diceValue}/>
    </div>
  )
}

export default Roll
