import React from 'react';
import './Sighting.css';

export default class Sighting extends React.Component {

    render() {
        return (
            <div>
                <div className="wrap-collapsible">
                    <input id="collapsible" type="checkbox" className="toggle" />
                    <label htmlFor="collapsible" className="lbl-toggle"> SIGHTING TITLE 1{this.props.title}</label>
                    <div className="collapsible-content">
                        <div className="sighting">
                            <div className="sightingTitle">Title: This is a test title{this.props.title}</div>
                            <div className="sightingDate">Date: This is a test date{this.props.date}</div>
                            <div className="sightingSpecies">Species: This is a test species{this.props.species}</div>
                            <div className="sightingLocation">Location: This is a test location{this.props.location}</div>
                            <div className="sightingBehavior">Behavior: This is a test behavior{this.props.behavior}</div>
                            <p className="sightingDetailedBehavior">Details: This is a test detail behavior record. This is a test detail behavior record. This is a test detail behavior record.{this.props.detailedBehavior}</p>
                        </div>
                    </div>
                </div>
                <div className="wrap-collapsible">
                    <input id="collapsible" type="checkbox" className="toggle" />
                    <label htmlFor="collapsible" className="lbl-toggle"> TEST TITLE 2{this.props.title}</label>
                    <div className="collapsible-content">
                        <div className="sighting">
                            <div className="sightingTitle">Title: This is test two{this.props.title}</div>
                            <div className="sightingDate">Date: This is a test date{this.props.date}</div>
                            <div className="sightingSpecies">Species: This is a test species{this.props.species}</div>
                            <div className="sightingLocation">Location: This is a test location{this.props.location}</div>
                            <div className="sightingBehavior">Behavior: This is a test behavior{this.props.behavior}</div>
                            <p className="sightingDetailedBehavior">Details: This is a test detail behavior record. This is a test detail behavior record. This is a test detail behavior record.{this.props.detailedBehavior}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}