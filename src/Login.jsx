import React from 'react';
import './Login.css';
import Logo from "../src/Images/logo.webp";
import Logo2 from "../src/Images/logo2.webp";
import { auth, provider } from "../src/Firebase";
import { signInWithPopup } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

const Login = () => {
    const [state,dispatch]=useStateValue();
    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src={Logo} alt="Logo" />
                <img src={Logo2} alt="Logo 2" />
            </div>
            <button type="button" onClick={signIn}>
                Sign In
            </button>
        </div>
    );
}

export default Login;
