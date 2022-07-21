
import useCounter from '../hooks/useCounter'
import { usefetch } from '../hooks/usefetch'
import { LoadingQuote } from './LoadingQuote'
import { Quote } from './Quote'


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter()
    const { data, isLoanding, hasError } = usefetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0]



    return (
        <>
            <h1>Breakin Bad Quotes</h1>
            <hr />
            {
                isLoanding
                    ?
                    <LoadingQuote />
                    :
                    <Quote author={author} quote={quote} />
            }

            <button
                onClick={() => increment(1)}
                className='btn btn-primary'
                disabled={isLoanding}
            >

                Next quote
            </button>
        </>
    )
}
