import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css'

function Login() {

    const signIn = () =>{

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
                <div className="login__text">
                    <h1>Sign in to whatsApp</h1>
                </div>
                <Button onClick={signIn} type="submit">
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
