import { useState } from "react"

function GifExpertApp() {
    
    // const categories = ['One Puch', 'Samurai X', 'Dragon ball']
    const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon ball'])

    function handleAdd (){
    //   setCategories( [...categories, 'Hunter'] )
      setCategories( cats => [...cats, 'hunter'])
    }

    console.log(categories)

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
            {categories.map(category => {
              return  <li key={category}>{category}</li>
            })
            }
            </ol>
        </>
    )
}

export default GifExpertApp