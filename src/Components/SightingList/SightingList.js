import React from 'react';
import Nav from '../Nav/Nav.js';
import Sighting from '../Sighting/Sighting.js';
import FilterOptions from '../FilterOptions/FilterOptions.js';
import SightingForm from '../SightingForm/SightingForm.js';
import { Link } from 'react-router-dom';

export default class SightingList extends React.Component {
    render() {
        return (
            <div>
                <section className="NavBar">
                    <Nav />
                </section>
                <section className="SightingForm">
                    <Link to="SightingForm" component={SightingForm}>Sighting Form</Link>
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