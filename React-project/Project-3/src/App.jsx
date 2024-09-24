import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count , setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return (
  
      <div>
      < Button handleClick = {handleClick}>
        <h2>{count}</h2>
      </Button>
        {/* <Card name = 'Sumair'>
          <h1>Muhammad</h1>
          <p>SUMAIr</p>
          <p>Khan</p>

        </Card>
        <Card children = 'munawar is here'>
          Hello g saare
        </Card> */}
      </div>
  )
}

export default App
