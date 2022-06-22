import { useEffect, useState } from "react";

import { getGifs } from '../helpers/getGifs'

function useFetchGifs(category) {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImges = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(true)
    }

    useEffect(() => {
        getImges();
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);

    }, []);




    return {
        images,
        isLoading
    }
}
export default useFetchGifs