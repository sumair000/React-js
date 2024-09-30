import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TimerComponent = () => {

    const [seconds ,setSeconds] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            console.log('setInterval executed');
            setSeconds(preSecond => preSecond + 1);
        }, 1000);

        return () =>{
            console.log('time to stop');
            clearInterval(interval)
        };
    },[])


  return (
    <div>
      <h1>seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
