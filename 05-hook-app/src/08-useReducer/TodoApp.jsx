
import useTodos from "../hooks/useTodos"
import TodoAdd from "./TodoAdd"
import TodoList from "./TodoList"


function TodoApp() {

  const {todos, onAddTodo ,handleDeleteTodo, handleToggleTodo, todosCount, pendingTodos} = useTodos()

    return (
        <>
            <h1>TodoApp : {todosCount} <small>Pendientes:{pendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                     />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onAddTodo} />
                </div>
            </div>

        </>
    )
}

export default TodoApp