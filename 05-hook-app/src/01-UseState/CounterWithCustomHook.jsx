import useCounter from "../hooks/useCounter"

function CounterWithCustomHook () {

const {counter, increment, decrement,reset } = useCounter()

    return(
        <>
            <h1>Counter with Hook: {counter}</h1>
            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-secondary"  onClick={reset}>Reset</button>
            <button className="btn btn-danger" onClick={decrement}>-1</button>
        </>
    )
}

export default CounterWithCustomHook