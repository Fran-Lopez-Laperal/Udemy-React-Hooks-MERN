
import React from 'react'
import useCounter from './Hooks/useCounter'

function CounteWithCustomHook() {

    const { state, increment, decrement, reset } = useCounter()

    return (
        <>
            <h1>Counter with Hokk: {state}</h1>
            <hr />

            <button className="btn btn-primary ms-2" onClick={() => increment()}>+1</button>
            <button className='btn btn-danger ms-2' onClick={reset}>Reset</button>
            <button className="btn btn-primary ms-2" onClick={() => decrement()}>-1</button>

        </>
    )
}

export default CounteWithCustomHook