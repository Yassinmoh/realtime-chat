import React from 'react'
import avatar from '../img/avatar.png'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'


const Navbar = () => {

    return (
        <div className='navbar'>
            <span className="logo">Chaty</span>
            <div className="user">
                <img src={avatar} alt="" />
                <span>yassin</span>
                <button onClick={()=>signOut(auth)}>logout</button>
            </div>
        </div>
    )
}

export default Navbar