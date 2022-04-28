import React from "react"
import propTypes from 'prop-types'

function CounterApp(props) {
    const { value } = props

    function handleClick(){
        console.log(handleClick)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{value}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: propTypes.number
}

export default CounterApp