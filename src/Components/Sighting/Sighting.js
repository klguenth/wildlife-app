import React from 'react';
import './Sighting.css';

export default class Sighting extends React.Component {

    render() {
        let sightings = [
            {title: 'Sea Otters Rafting', date: '10/03/2019', species: 'North American Sea Otter', location: 'Monterey, CA', behavior: 'sleeping', detailedBehavior: 'A group of 4 Sea Otters sleeping together in a raft. Sea Otters were noticed to be linking paws, called "rafting"'},
            {title: 'Humpback Whales Breaching', date: '8/30/2019', species: 'Humpback Whales', location: 'San Francisco, CA', behavior: 'playing', detailedBehavior: 'A group of 6 Humpback Whales were observed displaying breaching behavior. It appeared to be a playful behavior, as prey did not seem to be in the animal. They were observed for about 15 minutes to be breaching and chasing each other.'},
            {title: 'White Shark Feeding', date: '9/12/2019', species: 'White Shark', location: 'Santa Barbara, CA', behavior: 'feeding', detailedBehavior: 'A single White Shark was observed feeding on a whale carcass just offshore. It appeared to be a juvenile male, and was not at all concerned with the presence of observers. It was singularly focused on the food and seemed to gorge itself.'},
        ];
        return (
            <div>
                <div className="wrap-collapsible">
                    <input id="collapsible" type="checkbox" className="toggle" />
                    <label htmlFor="collapsible" className="lbl-toggle">{this.props.sightings.title}</label>
                    <div className="collapsible-content">
                        <div className="sighting">
                            <div className="sightingTitle">Title: {this.props.sightings.title}</div>
                            <div className="sightingDate">Date: {this.props.sightings.date}</div>
                            <div className="sightingSpecies">Species: {this.props.sightings.species}</div>
                            <div className="sightingLocation">Location: {this.props.sightings.location}</div>
                            <div className="sightingBehavior">Behavior: {this.props.sightings.behavior}</div>
                            <p className="sightingDetailedBehavior">Details: {this.props.sightings.detailedBehavior}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}