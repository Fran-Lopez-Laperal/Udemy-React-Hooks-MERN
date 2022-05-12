import { useEffect, useState } from "react"

function SimpleForm() {

    const [formState, setFormState] = useState(
        {
            name: '',
            email: ''
        }
    )

    const { name, email } = formState

    useEffect(() => {
        console.log('hey')

    },[])

    useEffect(() => {
        console.log('form cambio')

    },[setFormState])

    useEffect(() => {
        console.log('email cambio')

    },[email])


    function handleChange({target}) {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }


    return (
        <>
            <h1>useEffect</h1>
            <hr />
        <div>
        <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
        </div>
        <div>
        <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@email.com"
                autoComplete="off"
                value={email}
                onChange={handleChange}
            />
        </div>
        </>
    )
}

export default SimpleForm