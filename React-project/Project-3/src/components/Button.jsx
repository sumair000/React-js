import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.handleClick}>
        Click ME
    </button>
    </div>
   
  )
}

export default Button
