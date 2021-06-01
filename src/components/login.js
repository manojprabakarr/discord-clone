import React from 'react'
import './login.css'
import {auth,provider} from '../firebase';



function Login() {

    const Signup=()=> {
        auth.signInWithPopup(provider).catch((err)=>alert(err.message));
    }
    return (
        <div className="login">
            <div className="logincontainer">
                <img src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo_full.png" alt=""/>

                <button onClick={Signup}>Sign-In</button>

            </div>
            
        </div>
    )
}

export default Login
