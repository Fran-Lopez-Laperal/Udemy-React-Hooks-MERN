import { useState } from "react"

function useCounter (initialValue){

    const [counter, setCounter] = useState(initialValue = 10)

    function increment (value){
        setCounter(counter + 1)
    }

    function decrement (){
        if(counter === 0 ) return

        setCounter(counter - 1)
    }

    function reset (){
        setCounter(initialValue)
    }


    return{
        counter,
        increment,
        decrement,
        reset
    }
}

export default useCounter