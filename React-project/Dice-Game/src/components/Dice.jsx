import React, { useState } from 'react'

import dice1 from '../assets/images/1.svg';
import dice2 from '../assets/images/2.svg';
import dice3 from '../assets/images/3.svg';
import dice4 from '../assets/images/4.svg';
import dice5 from '../assets/images/5.svg';
import dice6 from '../assets/images/6.svg';

import './Dice.css'

const Dice = () => {

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [diceValue, setDiceValue] = useState(1);

  function rollDice(){

    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);

  }

  return (
    <div className='dice-container'>
      <img src={diceImages[diceValue - 1]}
       alt={`image is not visble!..`}
       style={{width: '200px', height:'200px'}}
      />
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  )
}

export default Dice

