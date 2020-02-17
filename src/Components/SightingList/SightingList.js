import React from 'react';
import ApiContext from '../../ApiContext';
import Sighting from '../Sighting/Sighting.js';
import SortOptions from '../SortOptions/SortOptions.js';
import { findSighting } from '../../sightings-helpers';

export default class SightingList extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    render() {
        const { sightingId } = this.props.match.params
        console.log(sightingId);
        const sightings = sightingId
            ? findSighting(this.props.sightings, sightingId)
            : this.props.sightings;
        console.log(sightings);
        return (
            <>
                <header>
                Sighting List
                </header>
                <SortOptions />
                <section className="sightingList">
                    <ul>
                        {sightings.map(sighting =>
                            <li key={sighting.sighting_id}>
                                <Sighting
                                    sighting_id={sighting.sighting_id}
                                    title={sighting.title}
                                    species={sighting.species}
                                    brief_description={sighting.brief_description}
                                    detailed_description={sighting.detailed_description}
                                    sighting_date={sighting.sighting_date}
                                    sighting_location={sighting.sighting_location}
                                    />
                            </li>
                        )}
                    </ul>
                </section>
            </>
        );
    }
}