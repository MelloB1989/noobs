import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
//import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import Fab from '@mui/material/Fab';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

export default class Floaters extends Component {

  render() {

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
    var provider = new firebase.auth.GoogleAuthProvider();

    const signin = () => {
		auth.signInWithPopup(provider).catch(alert);
	}

    return (
      <div>
        <Fab className='float' sx={{ color: 'orange', backgroundColor : 'black' }} onClick={signin} aria-label="sign_in">
            { this.props.logged_in ? (<img src={auth.currentUser.photoURL} alt="profile"/>) : (<LoginRoundedIcon fontSize="large"/>)}
        </Fab>
      </div>
    )
  }
}
