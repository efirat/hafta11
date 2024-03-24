import { useRef, useState } from "react";

function App() {
  const [sayac, sayacGuncelle] = useState(0)

  const puan = useRef(0)

  function puanGuncelle(){
    puan.current += 10
    //alert(puan.current)
  }

  return (
    <div>
      Puan : {puan.current}
      <hr/>
      <div>
        {sayac}
        <button onClick={()=>{sayacGuncelle(eskiDeger=>eskiDeger+5)}}>Sayaç Arttır (Render Yapar)</button>
      </div>
      <hr/>
      <div>
        <button onClick={puanGuncelle}>Ref Değeri Güncelle (Render Yapmaz)</button>
      </div>

    </div>
  );
}

export default App;
