import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBiWNc0QLVv3cPVdr7wYmCqDhzXaUR72pY",
    authDomain: "discordclone-2a20b.firebaseapp.com",
    projectId: "discordclone-2a20b",
    storageBucket: "discordclone-2a20b.appspot.com",
    messagingSenderId: "617041897518",
    appId: "1:617041897518:web:994d6c8e601f52491597bf",
    measurementId: "G-LY51WSS773"
  };


  const firebaseapp= firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebaseapp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider};
  export default db;

  