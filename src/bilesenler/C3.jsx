import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

function C3(){
    const veri = useContext(GlobalContext)
    return(
        <>
            <p>C3</p>
            <p>Son bileşene ulaşıldı. <strong>Global contextteki veri : {veri}</strong></p>
        </>
    )
}

export default C3
