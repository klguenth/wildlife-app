import React from 'react';
import './Nav.css';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="topNav">
                <a href="www.wildlifewatch.com" className="homeLink">Home</a>
                <a href="www.wildlifewatch.com/login" className="loginLink">Login</a>
                <a href="www.wildlifewatch.com/about" className="aboutLink">About</a>
            </div>
        )
    }
}
