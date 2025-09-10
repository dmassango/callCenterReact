
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
        apiKey: "AIzaSyCxjTaW2OvNypS6OMWJH2kPlrCwzOHFt5Y",
        authDomain: "callsystem-d80c0.firebaseapp.com",
        projectId: "callsystem-d80c0",
        storageBucket: "callsystem-d80c0.firebasestorage.app",
        messagingSenderId: "832884620594",
        appId: "1:832884620594:web:3ce511d74da81054e8eb2b",
        measurementId: "G-R9088YL4NQ"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };




