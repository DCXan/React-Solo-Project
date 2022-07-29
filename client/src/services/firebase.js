import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAk3c1p9zIjqGU2EqYLOFXuplq4NG_rMaQ",
    authDomain: "react-chat-app-ec10e.firebaseapp.com",
    projectId: "react-chat-app-ec10e",
    storageBucket: "react-chat-app-ec10e.appspot.com",
    messagingSenderId: "456687147750",
    appId: "1:456687147750:web:b5da6163bd1e9e74d27927",
    measurementId: "G-3DENZEK5SF"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function loginWithGoogle() {

    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
        
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

async function sendMessage(roomId, user, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}

export { loginWithGoogle, sendMessage };