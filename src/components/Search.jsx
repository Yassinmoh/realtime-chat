import React from 'react'
import avatar from '../img/avatar.png'



const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='find user'/>
            </div>
            <div className="userChat">
                <img src={avatar} alt="" />
                <div className="userChatInfo">
                    <span>yassin</span>
                </div>
            </div>
        </div>
    )
}

export default Search