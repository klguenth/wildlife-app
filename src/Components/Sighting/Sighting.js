import React from 'react';
import './Sighting.css';

export default class Sighting extends React.Component {

    render() {

        return (
            <div>
                <div className="wrap-collapsible">
                    <input id="collapsible" type="checkbox" className="toggle" />
                    <label htmlFor="collapsible" className="lbl-toggle">Title</label>
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