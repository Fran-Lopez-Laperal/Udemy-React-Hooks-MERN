import { useEffect, useState } from "react"

function Message() {

  const [coords, setCoords] = useState({x:0, y:0})
  const {x,y} = coords

  useEffect(() => {


    const mouseMove = (e) => {
      const coodrs = { x: e.x, y: e.y };
      setCoords(coodrs)
     }
    window.addEventListener('mousemove', mouseMove)

    return () => {
    window.addEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <>
      <h3>Hola caracola</h3>

      <p>
        x:{x},
        y:{y}
      </p>

    </>
  )
}

export default Message