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
                        <div className="Sighting">
                            <div className="SightingTitle">Title: This is a test title{this.props.title}</div>
                            <div className="SightingDate">Date: This is a test date{this.props.date}</div>
                            <div className="SightingSpecies">Species: This is a test species{this.props.species}</div>
                            <div className="SightingLocation">Location: This is a test location{this.props.location}</div>
                            <div className="SightingBehavior">Behavior: This is a test behavior{this.props.behavior}</div>
                            <p className="SightingDetailedBehavior">Details: This is a test detail behavior record. This is a test detail behavior record. This is a test detail behavior record.{this.props.detailedBehavior}</p>
                        </div>
                    </div>
                </div>
                <div className="wrap-collapsible">
                    <input id="collapsible" type="checkbox" className="toggle" />
                    <label htmlFor="collapsible" className="lbl-toggle"> SIGHTING TITLE 2{this.props.title}</label>
                    <div className="collapsible-content">
                        <div className="Sighting">
                            <div className="SightingTitle">Title: This is a test title{this.props.title}</div>
                            <div className="SightingDate">Date: This is a test date{this.props.date}</div>
                            <div className="SightingSpecies">Species: This is a test species{this.props.species}</div>
                            <div className="SightingLocation">Location: This is a test location{this.props.location}</div>
                            <div className="SightingBehavior">Behavior: This is a test behavior{this.props.behavior}</div>
                            <p className="SightingDetailedBehavior">Details: This is a test detail behavior record. This is a test detail behavior record. This is a test detail behavior record.{this.props.detailedBehavior}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}