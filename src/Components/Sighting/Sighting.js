import React from 'react';
import './Sighting.css';

export default class Sighting extends React.Component {

    render() {
        return (
            <div>
                <div className="wrap-collapsible">
                    <input id="collapsible" type="checkbox" className="toggle" />
                    <label htmlFor="collapsible" className="lbl-toggle"> Title</label>
                    <div className="collapsible-content">
                        <div className="sighting">
                            <div className="sightingTitle">Title: This is an example title{this.props.title}</div>
                            <div className="sightingDate">Date: This is an example date{this.props.date}</div>
                            <div className="sightingSpecies">Species: This is an example species{this.props.species}</div>
                            <div className="sightingLocation">Location: This is an example location{this.props.location}</div>
                            <div className="sightingBehavior">Behavior: This is an example behavior{this.props.behavior}</div>
                            <p className="sightingDetailedBehavior">Details: This is example detail. This is example detail. This is example detail.{this.props.detailedBehavior}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}