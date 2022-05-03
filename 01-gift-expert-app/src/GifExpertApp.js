import { useState } from "react"
import AddCategory from './components/AddCatergory'
import GifGrid from "./components/GigGrid"

function GifExpertApp() {

    const [categories, setCategories] = useState(['Dragon ball'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map(category =>
                    <GifGrid
                        key={category}
                       category= {category}
                    />
                )
                }
            </ol>
        </>
    )
}

export default GifExpertApp