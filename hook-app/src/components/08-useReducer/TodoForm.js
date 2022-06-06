import React from 'react'
import useForm from '../../Hooks/useForm';

export const TodoForm = ({handleAddTodo}) => {

    const [{ description }, handleChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 3) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo)
        reset();
    }

  return (
   <>
        <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className='form-control'
                            placeholder='Aprender...'
                            autoComplete='off'
                            value={description}
                            onChange={handleChange}
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1 btn-block'

                        >
                            Agregar
                        </button>
                    </form>
   </>
  )
}
