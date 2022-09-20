import React from 'react';
import firebase from 'firebase/compat/app';
import {useAuthState} from 'react-firebase-hooks/auth';
//import 'firebase/compat/firestore';
import Floaters from './components/Floaters';

function Auth(props) {

    const firebaseConfig = {
        apiKey: "AIzaSyA5k0D_w0KYlXY8zko6n5HC_3KYOTX02ug",
        authDomain: "noobs-d67c1.firebaseapp.com",
        projectId: "noobs-d67c1",
        storageBucket: "noobs-d67c1.appspot.com",
        messagingSenderId: "510438525641",
        appId: "1:510438525641:web:ac6ec07e78ae333758db18",
        measurementId: "G-75JQ2T4WEQ"
      };
    
    firebase.initializeApp(firebaseConfig);
    var auth = firebase.auth();
    //var provider = new firebase.auth.GoogleAuthProvider();

    const [user] = useAuthState(auth);
  return (
    <Floaters logged_in={user} mode={props.mode} toggleMode={props.toggleMode}/>
  )
}

export default Auth
