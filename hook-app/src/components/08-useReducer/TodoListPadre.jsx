import React from 'react'
import { TodoItemHijo } from './TodoItemHijo'


export const TodoListPadre = ({ todos, handleDelete, handleToggle }) => {



  return (

    <ul className='list-group list-group-flush'>
      {
        todos.map((todo, i) => (
          <TodoItemHijo
            key={todo.id}
            todo={todo}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))
      }
    </ul>
  )
}
