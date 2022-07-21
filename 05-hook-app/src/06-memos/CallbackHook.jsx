import { useCallback, useState } from "react"
import ShowIncrement from "./ShowIncrement"

function CallbackHook() {

    const [counter, setCounter] = useState(10);


    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value)
        },
        [],
    )


    // function incrementFather() {
    //     setCounter(counter + 1)
    // }

    return (
        <>
            <h1>UseCallback Hook :{counter}</h1>
            <ShowIncrement
                increment={incrementFather}
            />
        </>
    )
}


export default CallbackHook