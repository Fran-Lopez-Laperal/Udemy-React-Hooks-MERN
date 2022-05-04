
// import GridItem from "./GridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"

// import getGifs from '../helpers/getGifs'
function GifGrid({ category }) {

    // const [images, setImages] = useState([]);
    const {loading} = useFetchGifs()
    console.log(loading)
    // useEffect(() => {
    //     getGifs(category)
    //     .then(imgs => setImages(imgs))
    // }, [category])
    //array de dependencias
   

    return (
        <>
            <h3>{category}</h3>
{loading ? 'Cargando...' : 'Data cargada'}

            {/* <div className="card-grid">
                <h3>{category}</h3>
                {
                    images.map(img => (
                        <GridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div> */}
        </>
    )
}

export default GifGrid