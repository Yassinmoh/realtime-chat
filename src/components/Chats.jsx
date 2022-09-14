import React, { useContext, useEffect, useState } from 'react'
import avatar from '../img/avatar.png'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext";





const Chats = () => {

    const [chats, setChats] = useState([])

    const { currentUser } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data())
            });
            return () => {
                unsub()
            }
        }
        currentUser.uid && getChats()
    }, [currentUser.uid])

    const handleSelect =(u)=>{
        dispatch({type:"CHANGE_USER", payload:u})
    }

    return (
        <div className='chats'>
            {Object.entries(chats)?.sort((a,b)=>b[1].data - a[1].data).map((chat) => (
                <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
                    <img src={chat[1].userInfo.photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chats