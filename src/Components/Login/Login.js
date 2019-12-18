import React from 'react';
import './Login.css';
import SubmitButton from '../SubmitButton/SubmitButton';

export default class Login extends React.Component {
    
    //insert form validation code here
    
    render() {
        return (
           <div>
                <form className="loginForm">
                <div>
                    <label for="username">Email</label>
                    <input type="text" name='username' id='username' />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <SubmitButton />
                </form>
           </div> 
        );
    }
}