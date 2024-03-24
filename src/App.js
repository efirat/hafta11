const { useRef, useState } = require("react")

function Timer(){
  const [sayac, sayacGuncelle] = useState(0)
  const intervalRef = useRef()

  const startTimer = () =>{
    intervalRef.current = setInterval(()=>{
      console.log("Timer tick")
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  }

  return(
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <br/>
      {sayac}
      <button onClick={()=> {sayacGuncelle(eskiDeger=>eskiDeger+5)}}>Sayaç arttır (+5)</button>

    </div>
  )
}
export default Timer


/*
//useRef chatgpt ornegi

import { useEffect, useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(()=>{
    prevCountRef.current = count
  }, [count])

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Current Count : {count}</p>
      <p>Previous Count : {prevCount !== undefined ? prevCount : 'N/A'}</p>
      <button onClick={()=> setCount(count + 1)}>Incremenet</button>
    </div>
  );
}

export default Counter;

*/