import userEvent from '@testing-library/user-event'
import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/authContext'
import { ChatContext } from '../context/chatContext'

const Message = ({message }) => {
    const ref = useRef()
    const {currentUser} =useContext(AuthContext)
    const {data} =useContext(ChatContext)
    const date = new Date()

    useEffect(()=>{
        ref.current?.scrollIntoView({behavior:'smooth'})
    },[message])
    return (
        <div className={`message ${message.senderId === currentUser.uid && 'owner'}`} ref={ref}>
            <div className="messageInfo">
                <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
                <span style={{fontSize:'14px' , marginTop:'5px'}}>{date.toLocaleTimeString()}</span>
            </div>
            <div className="messageContent">
                { message.text &&<p>{message.text}</p>}
                {message.img && <img src={message.img} alt="" />}
            </div>
        </div>
    )
}

export default Message