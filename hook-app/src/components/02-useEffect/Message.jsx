import { useEffect } from "react"

function Message () {

    useEffect(() => {
      
        console.log('componente montado')
      return () => {
        console.log('componente desmontado')
      }
    }, [])
    
    return(
        <>
            <h3>Hola caracola</h3>
        </>
    )
}

export default Message