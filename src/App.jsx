import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let val=useRef(0);
  let btnRef=useRef();


  function handleIncrement(){
    val.current=val.current+1;
    console.log(val.current);
    setCount(count+1);
  }

  function changeColor(){
     btnRef.current.style.backgroundColor="red";
     btnRef.current.style.color="white";
  }

  useEffect(()=>{
     console.log("It's run every time on rendering")
  });

  return (
    <div>

          <p>Count:{count}</p>
         <button ref={btnRef} onClick={handleIncrement}>Increment</button>
         <button onClick={changeColor}>change the colour of Increment button</button>
    </div>
  )
}

export default App
