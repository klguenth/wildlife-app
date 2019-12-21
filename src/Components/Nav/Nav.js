import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="topNav">
                <Link to='/LandingPage'>Home</Link>
                <Link to='/Login'>Login</Link>
            </div>
        )
    }
}
