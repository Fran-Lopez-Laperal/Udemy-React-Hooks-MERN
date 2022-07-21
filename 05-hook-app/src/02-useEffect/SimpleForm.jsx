import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'fran',
        email: 'fran@fran.com'
    })

    const { username, email } = formState;

    function onInputChange({ target }) {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('usseEfect')
    }, [])

    useEffect(() => {
        // console.log('usseEfect changed')
    }, [formState])

    useEffect(() => {
        // console.log('email cahnge')
    }, [email])



    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                className='form-control mb-2'
                type="text"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className='form-control'
                placeholder='fran@fran.com'
                name="email"
                value={email}
                onChange={onInputChange}
            />
           { (username === 'fran' ) && <Message /> }
        </>



    )
}
