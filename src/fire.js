import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBb05SRrUpa2p4NHDDecZENd4QIi77XJ0I",
    authDomain: "todoapp-71c0f.firebaseapp.com",
    projectId: "todoapp-71c0f",
    storageBucket: "todoapp-71c0f.appspot.com",
    messagingSenderId: "979879409915",
    appId: "1:979879409915:web:ecbb9b7471a44734d8185e"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire