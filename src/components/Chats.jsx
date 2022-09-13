import React from 'react'
import avatar from '../img/avatar.png'






const Chats = () => {
    return (
        <div className='chats'>
            <div className="userChat">
                <img src={avatar} alt="" />
                <div className="userChatInfo">
                    <span>yassin</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={avatar} alt="" />
                <div className="userChatInfo">
                    <span>yassin</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={avatar} alt="" />
                <div className="userChatInfo">
                    <span>yassin</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={avatar} alt="" />
                <div className="userChatInfo">
                    <span>yassin</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats