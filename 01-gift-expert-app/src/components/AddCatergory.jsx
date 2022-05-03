import { useState } from "react"
import PropTypes from 'prop-types'

function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handlesubmit(e) {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('')
        }
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    value={inputValue}
                />
            </form>
        </>

    )
}


AddCategory.prototype = {
    setCategories : PropTypes.func.isRequired
}



export default AddCategory