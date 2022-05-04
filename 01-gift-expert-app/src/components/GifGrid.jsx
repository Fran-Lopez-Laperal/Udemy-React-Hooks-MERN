
import GridItem from "./GridItem";

import useFetchGifs from "../hooks/useFetchGifs"

function GifGrid({ category }) {

    const { data: images, loading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className=" animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GridItem
                            key={images.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid