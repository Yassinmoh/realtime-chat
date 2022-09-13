import React, { useState } from "react";
import addAvatar from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";



const Register = () => {

    const [err, setErr] = useState(false)
    const navigate=useNavigate()




    const handleSubmit = async (e) => {

        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "userChats", res.user.uid),{})
                        navigate("/")
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                    }
                });
            });
        } catch (err) {
            setErr(true);
        }
    };




return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>yassin chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Name' />
                <input type="email" placeholder='Enter Email' />
                <input type="password" placeholder='Enter Password' />
                <input style={{ display: 'none' }} type="file" id='file' />
                <label htmlFor='file'>
                    <img src={addAvatar} alt="Add Avatar" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something Went Wrong</span>}
            </form>
            <p>Do you have an account ? Login </p>
        </div>
    </div>
)
}

export default Register