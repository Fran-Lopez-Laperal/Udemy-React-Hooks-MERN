import useFetch from '../../Hooks/useFetch'
import './multiple.css'

function MultipleCustomHook (){

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)   
    console.log(state)
    return(
        <>
            <h1>Custom Hooks!!!!</h1>
        </>
    )
}

export default MultipleCustomHook