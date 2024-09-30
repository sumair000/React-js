
import { useEffect } from 'react'
import './App.css'

function App() {

// firt -> side-effect funtion hy, e.g db call,fetch api cal ....

// second -> clean-up function, prevent from memory leaks, unmounted elements.....

// third -> comma separated dependency list, to run on the spot side effect.....


  useEffect(() => {
    
  })
  
  return(
    <>
    <div>Bado-Badi</div>
    </>
  )
}

export default App
