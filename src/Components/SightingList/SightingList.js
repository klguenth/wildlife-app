import React from 'react';
import Nav from '../Nav/Nav.js';
import Sighting from '../Sighting/Sighting.js';
import FilterOptions from '../FilterOptions/FilterOptions.js';

export default class SightingList extends React.Component {
    render() {
        return (
            <div>
                <section className="NavBar">
                    <Nav />
                </section>
                <section className="SightingList">
                    <FilterOptions />
                    <ul>
                        <Sighting />
                    </ul>
                </section>
            </div>
        );
    }
}