import React, { useState} from "react"
import propTypes from 'prop-types'

function CounterApp(props) {
    const { value } = props

   const [counter, setCounter] = useState(0)

    //handleAdd
    function handleClick(){
    //    setCounter(counter + 1)
    setCounter((c) => c + 1 )
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: propTypes.number
}

export default CounterApp