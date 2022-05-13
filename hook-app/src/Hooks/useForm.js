import { useState } from "react";

function useForm (initialState = {}) {

    const [value, setValues] = useState(initialState)


    function handleChange({ target }) {

        setValues({
            ...value,
            [target.name]: target.value
        })
    }

    return [value, handleChange]
}

export default useForm