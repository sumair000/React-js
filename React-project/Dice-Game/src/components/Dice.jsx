import React, { useState } from 'react'

import dice1 from '../assets/images/1.svg';
import dice2 from '../assets/images/2.svg';
import dice3 from '../assets/images/3.svg';
import dice4 from '../assets/images/4.svg';
import dice5 from '../assets/images/5.svg';
import dice6 from '../assets/images/6.svg';

import './Dice.css'

const Dice = ({diceValue}) => {

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];


  return (
    <div className='dice-container'>
     <img className='img' src={diceImages[diceValue - 1]} alt={`Dice ${diceValue}`} />
    </div>
  )
}

export default Dice

