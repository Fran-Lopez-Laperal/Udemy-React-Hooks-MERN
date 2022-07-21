import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
   }
   


function useTodos (){


    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const todosCount = todos.length;

    const pendingTodos = todos.filter(todo => !todo.done).length;

    const onAddTodo = (todo) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action)
    }

    function handleDeleteTodo  (id) {
        dispatch({
            type:'[TODO] Remove todo',
            payload: id
        })
    }

    function handleToggleTodo (id){
       dispatch({
            type:'[TODO] Toggle todo',
            payload: id
        })
    }

    return {
        todos,
        onAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodos
    }
}


export default useTodos