import React, { useState } from "react"
import propTypes from 'prop-types'

function CounterApp(props) {
    const { value } = props

    const [counter, setCounter] = useState(value)

    //handleAdd
    function handleSum() {
        setCounter(counter + 1)
    }

    function handleLess() {
        setCounter(counter - 1)
    }

    function handleReset() {
        setCounter(value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleSum}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleLess}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: propTypes.number
}

export default CounterApp