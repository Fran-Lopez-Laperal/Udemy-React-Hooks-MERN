import { useState, useEffect } from "react";

function GifGrid({ category }) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs()
    },[])
    //array de dependencias, esto 
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=YmFkzSuZrFRq1U7GgSZd9gCuRYSZCwMk'
        const resp = await fetch( url );
        const {data} = await resp.json()

        const gifs = data.map(img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })
        console.log(gifs)
    }
    // getGifs()
    return (
        <div>
            <h3>{category}</h3>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}

export default GifGrid