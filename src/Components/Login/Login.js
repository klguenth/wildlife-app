import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import SubmitButton from '../SubmitButton/SubmitButton';

export default class Login extends React.Component {
    handleSubmit = (ev) => {
        ev.preventDefault()
    }
    render() {
        return (
            <form className='loginForm' onSubmit={this.handleSubmit}>
                <header className='loginHeader'>
                    Log In
                </header>
                <div className='usernameField'>
                    <label htmlFor='username'>Email</label>
                    <input type='text' name='username' id='username' />
                </div>
                <div className='passwordField'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password' id='password' />
                </div>
                <SubmitButton /><br />
                <Link to='/signUp'>Sign Up</Link>
            </form>
        );
    }
}