import React from 'react'
import avatar from '../img/avatar.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Chaty</span>
            <div className="user">
                <img src={avatar} alt="" />
                <span>yassin</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar