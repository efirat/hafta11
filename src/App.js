import React, { useEffect, useRef, useState } from "react";

const App = ({ prop }) => {

  const [sayac, sayacGuncelle] = useState(0) // ⬅ bu kod sadece ilk renderda çalışır
  const prevPropRef = useRef(prop) // ⬅ bu kod sadece ilk renderda çalışır

  useEffect(() => {
    console.log("Önceki prop:", prevPropRef.current);
    console.log("Güncel prop:", prop);
    
    prevPropRef.current = prop
  }, [prop]);

  return (
    <div>
      <p>Prop: {prop}</p>
    </div>
  );
};

export default App;