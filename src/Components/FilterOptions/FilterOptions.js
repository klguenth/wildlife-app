import React from 'react';
import './FilterOptions.css';

export default class FilterOptions extends React.Component {
    render() {
        return (
            <div className="filterOptions">
                <header>
                    <h3>
                        Filter By
                    </h3>
                </header>
                <div className="filterOptions-option">
                    <label htmlFor="filter-all">
                        <input type="radio" value="All" id="filterAll" name="filter" />
                        All
                    </label>
                </div>
                <div className="filterOptions-option">
                    <label htmlFor="filter-species">
                        <input type="radio" value="Species" id="filterSpecies" name="filter" />
                        Species
                    </label>
                </div>
                <div className="filterOptions-option">
                    <label htmlFor="filter-behavior">
                        <input type="radio" value="Behavior" id="filterBehavior" name="filter" />
                        Behavior
                    </label>
                </div>
                <div className="filterOptions-option">
                    <label htmlFor="filter-location">
                        <input type="radio" value="Location" id="filterLocation" name="filter" />
                        Location
                    </label>
                </div>
                <div className="filterOptions-option">
                    <label htmlFor="filter-date">
                        <input type="radio" value="Date" id="filterDate" name="filter" />
                        Date
                    </label>
                </div>
            </div>
        );
    }
}