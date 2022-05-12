import { useState } from "react";

function useCounter (initialState = 10) {

    const [state, setState] = useState(initialState)


    function increment(factor = 1) {
        setState(state + factor)
    }
    
    
    function decrement(factor = 1) {
        setState(state - factor)
    } 

    function reset() {
        setState(initialState)
    } 

    return{
        state,
        increment,
        decrement,
        reset
    }

}

export default useCounter