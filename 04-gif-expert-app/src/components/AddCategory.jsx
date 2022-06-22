import { useState } from "react"

function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('')

    function handleInputChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (inputValue.length <= 1) return
        onNewCategory(inputValue)
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

export default AddCategory