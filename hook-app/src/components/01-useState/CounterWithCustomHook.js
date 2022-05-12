
import React from 'react'
import useCounter from './Hooks/useCounter'

function  CounteWithCustomHook () {

    const {state, increment, decrement, reset } = useCounter()

    return (
        <>
            <h1>Counter with Hokk: {state}</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
            <button className='btn btn-danger' onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>

        </>
    )
}

export default CounteWithCustomHook