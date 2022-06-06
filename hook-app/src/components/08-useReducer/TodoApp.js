import React, { useEffect, useReducer } from 'react'


import './styles.css'
import { TodoForm } from './TodoForm';
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

  
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = (newTodo) => {
        dispatch({
            type:'add',
            payload: newTodo
        })
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
                   <TodoForm
                       handleAddTodo={handleAddTodo}
                   />

                </div>
            </div>
        </div>
    )
}
