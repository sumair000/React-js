import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    function handleClick(){
        if(theme === 'Light'){
            setTheme('Dark')
        }
        else{
            setTheme('Light')
        }
    }

  return (
   <button onClick={handleClick}>
    Change Theme
   </button>
  )
}

export default ChildC
