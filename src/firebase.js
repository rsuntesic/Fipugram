import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCQqviEMlrHwdy_7wIFCTDZ1MLQL_Mc85U",
    authDomain: "fipugram-e1534.firebaseapp.com",
    projectId: "fipugram-e1534",
    storageBucket: "fipugram-e1534.appspot.com",
    messagingSenderId: "269722399791",
    appId: "1:269722399791:web:f9eb32224eef3c0c2e82da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {
    firebase,
  };