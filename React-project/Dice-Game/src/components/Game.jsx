import React from 'react'
import Player from './Player'
import Dice from './Dice'
import NavBar from './NavBar'
import './Game.css'

const Game = () => {
  return (
    <div>
        <NavBar />
        <Player />
        <div className='main-container'>
            <Dice />
            <Dice />
        </div>
    </div>
  )
}

export default Game
