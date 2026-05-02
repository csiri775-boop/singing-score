import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbAS6x...",
  authDomain: "singing-contest-system.firebaseapp.com",
  projectId: "singing-contest-system",
  storageBucket: "singing-contest-system.appspot.com",
  messagingSenderId: "912729237851",
  appId: "1:912729237851:web:d46815c6e04112c26c527e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
