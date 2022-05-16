import React, { useMemo, useState } from 'react'
import procesoPesado from '../../helpers/ProcesoPesado';
import useCounter from '../../Hooks/useCounter'
import '../01-useState/Counter.css'


function MemoHook() {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
        <h1>MemoHook</h1>
            <h3>Counter: <small> {counter}</small> </h3>
            <hr />

            <p>{procesoPesado(counter)}</p>

            <button className="btn btn-primary ml-5" onClick={increment}>
                +1
            </button>

            <button className='btn btn-outline-primary ml-5' onClick={() => 
            setShow(!show) }>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>

    )
}


export default MemoHook