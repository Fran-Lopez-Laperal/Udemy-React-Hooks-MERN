function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span
                    className={`align-slef-center ${(todo.done ) ? 'text-decoration-line-through': ''}`}
                    onClick={() => onToggleTodo(todo.id)}
                >{todo.description}
                </span>
                <button
                    onClick={() => onDeleteTodo(todo.id)}
                    className="btn btn-danger"
                >
                    Borrrar
                </button>
            </li>
        </>
    )
}

export default TodoItem