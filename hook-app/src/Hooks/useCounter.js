import { useState } from "react";

function useCounter(initialState = 100) {

    const [counter, setCounter] = useState(initialState)


    function increment() {
        setCounter(counter + 1)
    }


    function decrement() {
        setCounter(counter - 1)
    }

    function reset() {
        setCounter(initialState)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}

export default useCounter