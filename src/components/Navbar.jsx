import React, { useContext } from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/authContext'


const Navbar = () => {
const {currentUser} = useContext(AuthContext)
    return (
        <div className='navbar'>
            <span className="logo">Chaty</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>logout</button>
            </div>
        </div>
    )
}

export default Navbar