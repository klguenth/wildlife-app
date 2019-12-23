import React from 'react';
import './Sighting.css';

export default class Sighting extends React.Component {

    render() {
        return (
            <div>
                <div className="Sighting">
                    <div className="SightingTitle">Title: {this.props.title}</div>
                    <div className="SightingDate">Date: {this.props.date}</div>
                    <div className="SightingSpecies">Species: {this.props.species}</div>
                    <div className="SightingLocation">Location: {this.props.location}</div>
                    <div className="SightingBehavior">Behavior: {this.props.behavior}</div>
                    <div className="SightingDetailedBehavior">Details: {this.props.detailedBehavior}</div>
                </div>
            </div>
        );
    }
}