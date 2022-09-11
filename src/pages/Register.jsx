import React from 'react'
import '../styles/register.css'
import addAvatar from '../img/addAvatar.png'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>yassin chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder='Enter Name'/>
                    <input type="email" placeholder='Enter Email'/>
                    <input type="password" placeholder='Enter Password'/>
                    <input style={{display:'none'}} type="file" id='file'/>
                    <label htmlFor='file'>
                        <img src={addAvatar} alt="Add Avatar" />
                        <span>Add an Avatar</span>
                    </label>
                <button>Sign Up</button>
                </form>
                <p>Do you have an account ? Login </p>
            </div>
        </div>
    )
}

export default Register