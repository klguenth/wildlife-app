import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <a href="www.wildlifewatch.com" className="homeLink">Home</a>
                <a href="www.wildlifewatch.com/login" className="loginLink">Login</a>
                <a href="www.wildlifewatch.com/about" className="aboutLink">About</a>
            </div>
        )
    }
}