import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="topNav">
                <Link to='/'>Home</Link>
                <Link to='/Login'>Login</Link>
                <Link to='/SightingForm'>New Sighting</Link>
            </div>
        )
    }
}
