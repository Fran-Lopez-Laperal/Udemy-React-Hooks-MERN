import { useState } from "react"
import AddCategory from './components/AddCatergory'

function GifExpertApp() {
    
    const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon ball'])

    // function handleAdd (){
    // //   setCategories( [...categories, 'Hunter'] )
    //   setCategories( cats => [...cats, 'hunter'])
    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
           
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