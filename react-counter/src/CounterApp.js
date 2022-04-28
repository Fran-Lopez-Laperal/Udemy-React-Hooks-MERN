import React from "react"
import propTypes from 'prop-types'

function CounterApp(props) {
    const { value } = props
    return (
        <>
            <h1>Counter App</h1>
            <h2>{value}</h2>
        </>
    )
}

CounterApp.propTypes = {
    value: propTypes.number
}

export default CounterApp