import React from 'react';
import './Login.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import ResetButton from '../ResetButton/ResetButton.js';

export default class Login extends React.Component {
    render() {
        return (
           <div>
                <form className="loginForm">
                    <div className="usernameField">
                        <label htmlFor="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div className="passwordField">
                        <label htmlFor="password">Password</label>
                        <input type="text" name='password' id='password' />
                    </div>
                <SubmitButton />
                <ResetButton />
                </form>
           </div> 
        );
    }
}