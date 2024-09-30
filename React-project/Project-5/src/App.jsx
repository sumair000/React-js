import { useState } from 'react'

import './App.css'
import ChildA from './components/ChildA'
import { createContext } from 'react'


const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState('Light');
  return (
    <div id='main'  style={{backgroundColor:theme==='Light' ? "green":"black"}}>
       <ThemeContext.Provider value={{theme , setTheme}} >
        <div >
        <ChildA />
        </div>
      </ThemeContext.Provider>
    </div>
     
 
  )
}

export {ThemeContext}
export default App
