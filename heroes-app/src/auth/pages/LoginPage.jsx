import { useNavigate } from "react-router-dom"

function LogiPage () {

   const  navigate = useNavigate()

    function onLogin () {
        navigate('/marvel', {
            replace: true
        })
    }

    return (
       <div className="container mt-5">
       <h1>Login</h1>
       <hr />

       <button
        className="btn btn-primary"
        onClick={onLogin}
        >
        Login
       </button>

       </div>
    )
}

export default LogiPage