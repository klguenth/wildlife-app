import React from 'react';
//import ApiContext from './ApiContext';
import Sighting from '../Sighting/Sighting.js';
import SortOptions from '../SortOptions/SortOptions.js';

export default class SightingList extends React.Component {
    
    //static contextType = ApiContext;

    render() {
        return (
            <div>
                <header>
                Sighting List
                </header>
                <SortOptions />
                <section className="sightingList">
                    <ul>
                        <Sighting sightings={this.props.sightings} />
                        <Sighting sightings={this.props.sightings} />
                        <Sighting sightings={this.props.sightings} />
                        <Sighting sightings={this.props.sightings} />
                    </ul>
                </section>
            </div>
        );
    }
}