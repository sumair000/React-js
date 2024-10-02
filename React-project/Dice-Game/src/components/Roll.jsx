import React, { useState } from 'react'
import Dice from './Dice';

import './Roll.css'

const Roll = () => {

    const [diceValue, setDiceValue] = useState(1);
    function rollDice(){

        const newValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newValue);
    }
  return (
    <div className='roll-container'>
      <button className='roll-btn' onClick={rollDice}>Roll Dice</button>
      <Dice diceValue={diceValue}/>
    </div>
  )
}

export default Roll
