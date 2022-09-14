import userEvent from '@testing-library/user-event'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { ChatContext } from '../context/chatContext'

const Message = ({message }) => {

    const {currentUser} =useContext(AuthContext)
    const {data} =useContext(ChatContext)
    return (
        <div className={`message ${message.senderId === currentUser.uid && 'owner'}`}>
            <div className="messageInfo">
                <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                { message.text &&<p>{message.text}</p>}
                {message.img && <img src={message.img} alt="" />}
            </div>
        </div>
    )
}

export default Message