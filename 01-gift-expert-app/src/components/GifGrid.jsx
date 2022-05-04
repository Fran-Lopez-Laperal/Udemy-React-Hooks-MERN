import { useState, useEffect } from "react";
import GridItem from "./GridItem";
import getGifs from '../helpers/getGifs'
function GifGrid({ category }) {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
        .then(imgs => setImages(imgs))
    }, [category])
    //array de dependencias
   

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                <h3>{category}</h3>
                {
                    images.map(img => (
                        <GridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid