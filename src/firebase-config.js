import * as firebase from 'firebase'; 
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAB-QbYXHNtNRXLuL_CEbsWntEX0QOtXIY",
    authDomain: "bumpp-8e318.firebaseapp.com",
    databaseURL: "https://bumpp-8e318.firebaseio.com",
    projectId: "bumpp-8e318",
    storageBucket: "bumpp-8e318.appspot.com",
    messagingSenderId: "460396770117",
    appId: "1:460396770117:web:f342fc1883c18d7299c42c",
    measurementId: "G-Q8CFN0PLQ7"
  };
 firebase.initializeApp(config);


 export default firebase;