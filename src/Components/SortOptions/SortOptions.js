import React from 'react';
import './SortOptions.css';

export default class SortOptions extends React.Component {
    render() {
        return (
            <div className="sortOptions">
                <h2>
                Sort By:
                </h2>
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