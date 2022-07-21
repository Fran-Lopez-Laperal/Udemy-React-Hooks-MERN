import { useForm } from "../hooks/useForm";

function TodoAdd({ onNewTodo }) {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })


    function onSubmit(e) {
        e.preventDefault();
        if (description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }
        onNewTodo(newTodo)
        onResetForm()
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"   
                    name='description'
                    placeholder="Qué hay que hacer"
                    className="form-control"
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}


export default TodoAdd