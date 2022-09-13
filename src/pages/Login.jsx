import React from 'react'
import '../styles/login.css'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [err, setErr] = useState(false)
    const navigate=useNavigate()




    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>yassin chat</span>
                <span className='title'>Log in</span>
                <form>
                    <input type="email" placeholder='Enter Email' />
                    <input type="password" placeholder='Enter Password' />
                    <button>Login</button>
                </form>
                <p>Do you have an account ? Create new account </p>
            </div>
        </div>
    )
}

export default Login