import React from 'react';
import { Route } from 'react-router-dom';
import SightingList from '../SightingList/SightingList.js';
import SubmitButton from '../SubmitButton/SubmitButton.js';
import ResetButton from '../ResetButton/ResetButton.js';
import './SignUpForm.css';

export default class SignUpForm extends React.Component {
    render() {
        return (
            <div className="SignUp">
                <h2>Start Tracking</h2>
                <form class='signup-form'>
                <div>
                    <label for="first-name">First name: </label>
                    <input placeholder='John' type="text" name='firstName' id='first-name' />
                </div>
                <div>
                    <label for="last-name">Last name: </label>
                    <input placeholder='Doe' type="text" name='lastName' id='last-name' />
                </div>
                <div>
                    <label for="username">Email: </label>
                    <input placeholder='wildlifewatcher@email.com' type="text" name='username' id='username' />
                </div>
                <div>
                    <label for="password">Password: </label>
                    <input placeholder='WhaLeS1!' type="text" name='password' id='password' />
                </div>
                    <SubmitButton />
                    <ResetButton />
                </form>
            </div>
        )
    }
}