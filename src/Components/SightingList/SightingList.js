import React from 'react';
import ApiContext from '../../ApiContext';
import Sighting from '../Sighting/Sighting.js';
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
        const sightings = sightingId
            ? findSighting(this.props.sightings, sightingId)
            : this.props.sightings;
        return (
            <>
                <header className="listHeader">
                Sighting List
                </header>
                <section className="sightingList">
                    <ul className="sightingList">
                        {sightings.map(sighting =>
                            <li key={sighting.sighting_id}>
                                <Sighting sighting={sighting} />
                            </li>
                        )}
                    </ul>
                </section>
            </>
        );
    }
}