import useCounter from '../../Hooks/useCounter';
import useFetch from '../../Hooks/useFetch'
import './multiple.css'

function MultipleCustomHook() {

    const {counter, increment} = useCounter(1)

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    // console.log(state)

    const { author, quote } = !!data && data[0];
    // console.log(author, quote)

    // console.log(data);
    return (
        <>
            <h1>BreakingBad Quotes</h1>

            <hr />

            {loading ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className='blockquote text-right'>
                        <p className='mn-0'>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                )
            }


            <button 
            className='btn btn-primary mb-5'
            onClick={increment}
            >
                Siguiente quote
            </button>
        </>
    )
}

export default MultipleCustomHook