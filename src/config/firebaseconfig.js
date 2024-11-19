import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Importando a compatibilidade para firestore
import "firebase/storage"; // Se você estiver usando armazenamento

const firebaseConfig = {
    apiKey: "AIzaSyB1TB3UN0ocroKQK5Gws2NcR_t87g8FvS4",
    authDomain: "gear-task.firebaseapp.com",
    projectId: "gear-task",
    storageBucket: "gear-task.appspot.com",
    messagingSenderId: "401664879034",
    appId: "1:401664879034:web:93a603af55fdbf7eb29583"
};
  
// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Obtém a instância do Firestore
const database = firebase.firestore(); // Isso deve funcionar agora

export default database;
