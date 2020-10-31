import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAGQNaBWfiYUEWRaSerW2Qr0hNhdIbT28",
    authDomain: "whatsapp-clone-24fb5.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-24fb5.firebaseio.com",
    projectId: "whatsapp-clone-24fb5",
    storageBucket: "whatsapp-clone-24fb5.appspot.com",
    messagingSenderId: "463241103343",
    appId: "1:463241103343:web:afe56a49e901300d21d81a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider} ;
  export default db;