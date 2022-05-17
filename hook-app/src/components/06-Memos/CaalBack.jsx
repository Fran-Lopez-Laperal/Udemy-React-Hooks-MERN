import { useCallback, useEffect, useState } from 'react'
import '../01-useState/Counter.css'
import ShowIncrement from './ShowIncrement'

function CallbackHook() {

    const [counter, setCounter] = useState(10)

    // function increment() {
    //     setCounter(counter + 1)
    // }


   const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [setCounter])

    useEffect(() => {

    }, [increment])

    return (
        <div>
            <h1>UseCalback: {counter}</h1>

            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallbackHook