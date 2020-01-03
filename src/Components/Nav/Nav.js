import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component {

    render() {
        let buttons;
        if (this.props.loggedIn) {
            buttons = <><li><Link to='/SightingForm'>New Sighting</Link></li>
            <li><Link to='/SightingList'>Sighting List</Link></li></>
        }
        return (
            <nav id="hamburgerNav">
                <label htmlFor="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger"/>
                    <ul>
                    <img src={require("./print.png")} className="pawPrint" alt="pawprint"></img>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Login'>Login</Link></li>
                        {buttons}
                    </ul>
            </nav>
        );
    }
}


