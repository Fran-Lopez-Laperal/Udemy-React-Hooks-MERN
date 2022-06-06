import React, { useEffect, useReducer } from 'react'
import useForm from '../../Hooks/useForm';

import './styles.css'
import { TodoListPadre } from './TodoListPadre';
import { todoReducer } from './todoReducer';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const [{ description }, handleChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])




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

        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action)
        reset();
    }

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action)

    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }




    return (
        <div>
            <div>TodoApp ({todos.length})</div>
            <hr />

            <div className='row'>
                <div className='col-7'>
                <TodoListPadre
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
                </div>

                <div className='col-5'>
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

                </div>
            </div>
        </div>
    )
}
