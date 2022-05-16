import { useRef } from "react"

function FocusScreen() {

    const inputRef = useRef()


    function handleClick(){
        inputRef.current.select()
    }
    console.log(inputRef)
    
    return (
        <div>
            <h1>Screen</h1>
            <hr/>

            <input
            ref={inputRef}
             className="form-control"
             placeholder="Su nombre" />

             <button
             className="btn btn-outline-primary mt-5"
             onClick={handleClick}
             >
                 Focus
             </button>
        </div>
    )
}

export default FocusScreen