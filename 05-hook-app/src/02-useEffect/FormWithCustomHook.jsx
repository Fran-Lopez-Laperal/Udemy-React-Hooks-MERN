import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    }
    )

    //const {username, email,password}= formState;
  
    return (
        <>
            <h1>Form Custom Hook</h1>
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

            <input
                type="password"
                className='form-control'
                placeholder='password'
                name="password"
                value={password}
                onChange={onInputChange}
            />
                <button onClick={onResetForm} className='btn btn-primary mt-3'>Borrar</button>
        </>

  

    )
}
