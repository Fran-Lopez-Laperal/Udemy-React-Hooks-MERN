import { useState } from "react";

function useForm(initialState = {}) {

    const [value, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    function handleChange({ target }) {

        setValues({
            ...value,
            [target.name]: target.value
        })
    }

    return [value, handleChange, reset]
}

export default useForm