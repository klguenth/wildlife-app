import React from 'react';
import './Sighting.css';
import Nav from '../Nav/Nav.js';

export default class Sighting extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="Sighting">
                    <div className="SightingDate">{this.props.date}</div>
                    <div className="SightingSpecies">{this.props.species}</div>
                    <div className="SightingLocation">{this.props.location}</div>
                    <div className="SightingBehavior">{this.props.behavior}</div>
                    <div className="SightingDetailedBehavior">{this.props.detailedBehavior}</div>
                </div>
            </div>
        );
    }
}