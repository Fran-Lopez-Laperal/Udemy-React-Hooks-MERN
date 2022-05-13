import useForm from "../../Hooks/useForm"
import './effects.css'

function FormWithCustomHook() {

    const [formValue, handleChange] = useForm(
        {
            name: '',
            email: '',
            password:''
        }
    )

    const { name, email, password } = formValue

  function handleSubmit(e){
      e.preventDefault();
      console.log(formValue)
  }
        
    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

            <div>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="**********"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>

        </form>
    )
}

export default FormWithCustomHook