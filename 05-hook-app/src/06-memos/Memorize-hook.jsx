import { useMemo } from "react"
import { useState } from "react"
import useCounter from "../hooks/useCounter"

const heaveStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...')
    }
    return `${iterationNumber}`
}



function MemoHook() {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizedalue = useMemo(() => heaveStuff(counter), [counter])

    return (
        <>
            <h1> <small>{counter}</small></h1>
            <hr />

            <h4>{memorizedalue}</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}


export default MemoHook