import React from 'react';
import Sighting from '../Sighting/Sighting.js';
import FilterOptions from '../FilterOptions/FilterOptions.js';

export default class SightingList extends React.Component {
    render() {
        return (
            <div>
                <FilterOptions />
                <section className="SightingList">
                    <ul>
                        <Sighting
                            title={Sighting.title}
                            date={Sighting.date}
                            species={Sighting.species}
                            location={Sighting.location}
                            behavior={Sighting.behavior}
                            details={Sighting.details} />
                    </ul>
                </section>
            </div>
        );
    }
}