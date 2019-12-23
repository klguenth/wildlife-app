import React from 'react';
import './FilterOptions.css';

export default class FilterOptions extends React.Component {
    render() {
        return (
            <div className="filterOptions">
                <header>
                Filter By:
                </header>
                <div className="dropdown">
                    <div className="dropdownContent">
                        <select className="select">
                            <option value="all">All</option>
                            <option value="species">Species</option>
                            <option value="behavior">Behavior</option>
                            <option value="location">Location</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}