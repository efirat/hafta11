import React, { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef();
  const goster = true

  useEffect(()=>{
    //document.querySelector("#elem1").focus()

  }, [])

  const onButtonClick = () => {
    console.log(inputRef.current?.focus());
  };

  return (
    <div>
      {goster && <input id="elem1" ref={inputRef} />}
      <button onClick={onButtonClick}>Butona Tıkla</button>
    </div>
  );
};

export default App;