import React from 'react';
import Sighting from './Sighting/Sighting.js';

export default class SightingList extends React.Component {
    render() {
        return (
            <section className="SightingList">
                <>
                    <ul>
                        <Sighting />
                    </ul>
                </>
            </section>
        )
    }
}