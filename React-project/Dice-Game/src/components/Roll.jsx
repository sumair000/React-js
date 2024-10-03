import React, { useState } from 'react'
import Dice from './Dice';

import './Roll.css'

const Roll = ({players, setPlayers, togglePlayer}) => {

    
    const [diceValue, setDiceValue] = useState(1);
    function rollDice(){
        console.log(players);
        
       
        const newValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newValue);

        const updatedPlayer = players.map(player => {
            if (player.turn) {
                
                const updateScore = player.score + newValue;
                // console.log(`${player.name}'s Score: ${updateScore}`);
                
                return {...player, score:updateScore};
            }
            return player;
        })
        setPlayers(updatedPlayer)

        if (newValue === 1) {
            console.log('player toggled..');
            
            togglePlayer();
        }
        console.log(updatedPlayer);
        const index = players.findIndex(index => index.disabled);
        if(index === -1)
        {
            console.log('haha.....');
            
            return;
        }
        
    }
  return (
    <div className='roll-container'>
      <button className='roll-btn' onClick={rollDice}>Roll Dice</button>
      <Dice diceValue={diceValue}/>
    </div>
  )
}

export default Roll
