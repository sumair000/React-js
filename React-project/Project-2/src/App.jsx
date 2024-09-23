
import './App.css'
import UserCard from './components/UserCard'
import afridi from './assets/afridi.jpg'
import Jimmy from './assets/Jimmy.jpg'
import Ronaldo from './assets/Ronaldo.jpg'


function App() {

  return (
    <div className='container'>
      <UserCard name="Afridi" desc="Description1" image = {afridi}/>
      <UserCard name="Jimmy" desc="Description2" image = {Jimmy}/>
      <UserCard name="Ronaldo" desc="Description3" image = {Ronaldo}/>
    </div>
  )
}

export default App
