import React from 'react';
import Sighting from '../Sighting/Sighting.js';
import SortOptions from '../SortOptions/SortOptions.js';

export default class SightingList extends React.Component {
    render() {
        return (
            <div>
                <SortOptions />
                <section className="SightingList">
                    <ul>
                        <Sighting sightings={this.sightings} />
                    </ul>
                </section>
            </div>
        );
    }
}