import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = ()=> {
        firebase.auth().signInWithPopup(provider)
        .then(resposne => {
            console.log(resposne)
        })
        .catch(error=>{
              console.log(error)
          });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign in With Google</button>
        </div>
    );
};

export default Login;