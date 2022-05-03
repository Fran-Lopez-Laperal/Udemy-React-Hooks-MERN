import { useState, useEffect } from "react";
import GridItem from "./GridItem";

function GifGrid({ category }) {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs()
    }, [])
    //array de dependencias, esto 
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=YmFkzSuZrFRq1U7GgSZd9gCuRYSZCwMk'
        const resp = await fetch(url);
        const { data } = await resp.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })
        console.log(gifs)
        setImages(gifs)
    }

    return (
        <div>
            <h3>{category}</h3>
            {images.map(img => (
                <GridItem
                    key={img.id}
                    {...img} />
            ))
            }
        </div>
    )
}

export default GifGrid