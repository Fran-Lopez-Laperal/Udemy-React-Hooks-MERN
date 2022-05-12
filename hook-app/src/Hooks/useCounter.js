import { useState } from "react";

function useCounter(initialState = 100) {

    const [state, setState] = useState(initialState)


    function increment(factor = 4) {
        setState(state + factor)
    }


    function decrement(factor = 1) {
        setState(state - factor)
    }

    function reset() {
        setState(initialState)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }

}

export default useCounter