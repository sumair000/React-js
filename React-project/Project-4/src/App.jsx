
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import TimerComponent from './components/TimerComponent'
import DataFetch from './components/DataFetch'

function App() {

  // const [total, setTotal] = useState(1);
  // const [count , setCount] = useState(0);

// firt -> side-effect funtion hy, e.g db call,fetch api cal ....

// second -> clean-up function, prevent from memory leaks, unmounted elements.....

// third -> comma separated dependency list, to run on the spot side effect.....

// variation 1

  // useEffect(() => {
  //   alert("i'll run on every rander");
  // })

// variation 2

// useEffect(() =>{
//   alert("i'll run on only first render")
// }, [])

// variation 3

// useEffect(()=>{
//   alert("i'll run whenever count will updated");

// }, [count])


// variation 4: multiple dependencies

// useEffect(()=>{
//   alert("i'll run when any of count or total will updates");
// },[count,total])



// variation 5: Clean-up function

// useEffect(()=>{
//   alert("will run when count updates")

//   return()=>{
//   alert("count is unmounted from UI")
//   }
// },[count])


  // function handlClick(){
  //   setCount(count + 1);
  // }

  // function hanleTotalClick(){
  //   setTotal(total + 1);
  // }

  
  return(
    <>

    <DataFetch />

    {/* <TimerComponent /> */}
    {/* <button onClick={handlClick}>
      click me
    </button>
    <br />
    count is: {count}
    <br />
    <button onClick={hanleTotalClick}>
      total btn
    </button>
    <br />
    total is: {total} */}
    {/* <h1>Bado Badi</h1> */}
    </>
  )
}

export default App
