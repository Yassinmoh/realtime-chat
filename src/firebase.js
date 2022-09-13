import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBqrgE9wdpwpQhFX8WuVao-SWKk9TMiIqs",
    authDomain: "chaty-6ddaf.firebaseapp.com",
    projectId: "chaty-6ddaf",
    storageBucket: "chaty-6ddaf.appspot.com",
    messagingSenderId: "216597932759",
    appId: "1:216597932759:web:1737b9392fccbbc2681e92"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

