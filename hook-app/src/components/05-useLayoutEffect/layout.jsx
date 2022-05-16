import { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../Hooks/useCounter';
import useFetch from '../../Hooks/useFetch'

import './layout.css'

function Layout() {

    const { counter, increment } = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({})

    const pTag = useRef()

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <>
            <h1>LayoutEffect</h1>

            <hr />

            <blockquote className='blockquote text-right'>
                <p className='mn-0'
                ref={pTag}>{quote}</p>

            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className='btn btn-primary mb-5'
                onClick={increment}
            >
                Siguiente quote
            </button>
        </>
    )
}

export default Layout