import { useEffect, useRef, useState } from "react";

function App() {
  const [sayi, setSayi] = useState(0);
  const [can, setCan] = useState(3);

  const sayiRef = useRef(0);

  useEffect(()=>{
    sayiRef.current++

    console.log("Sayı değişti : ", sayi);
    console.log("SayıRef değişti : ", sayiRef.current -1);

  }, [sayi]);

  return (
    <div>
      <p>Sayı : {sayi} | Can : {can}</p>
      <button onClick={()=>setSayi(eskiDeger=>eskiDeger+5)}>Sayıyı Arttır (+5)</button>
      <button onClick={()=>setSayi(eskiDeger=>eskiDeger-3)}>Sayıyı Azalt (-3)</button>

      <button onClick={()=>setCan(eskiDeger=>eskiDeger-1)}>Canı Azalt (-1)</button>
    </div>
  );
}

export default App;
