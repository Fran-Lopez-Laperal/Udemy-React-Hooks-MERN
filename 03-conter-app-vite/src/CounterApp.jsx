import PropTypes from 'prop-types'
import { useState, use } from 'react'



function CounterApp({ value }) {
console.log('render')
    const [sum, setSum] = useState(value)

    const handleSum = (e) => {
       setSum( sum + 1)
    }

    const handleRest = (e) => {
        setSum( sum - 1)
     }
     const handleReset = (e) => {
        setSum(value )
     }

    return (
        <>
            <h5>Counter App</h5>
            <h1>{sum}</h1>
            <button onClick={handleSum}> + 1</button>
            <button onClick={handleRest}> - 1</button>
            <button onClick={handleReset}> Reset</button>
        </>
    )
}

export default CounterApp


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}