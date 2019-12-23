import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton.js';
import ResetButton from '../ResetButton/ResetButton.js';
import './SightingForm.css';

export default class SightingForm extends React.Component {

    handleAddSighting = event => {
        event.preventDefault()
        const newSighting = {};
        newSighting.title = event.target.title.value;
        newSighting.date = event.target.date.value;
        newSighting.species = event.target.species.value;
        newSighting.location = event.target.location.value;
        newSighting.behavior = event.target.behavior.value;
        newSighting.details = event.target.details.value;
    }

    render() {
        return (
            <div id='sightingFormBody'>
                <header>
                    New Sighting
                </header>
                <form id="record-sighting">
                    <div className="form-section">
                        <label htmlFor="sighting-title">Title: </label>
                        <input type="text" className="sighting-title" placeholder="Humpbacks Feeding" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="species-name">Species: </label>
                        <input type="text" className="species-title" placeholder="Humpback Whale" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="behavior-short">Behavior: </label>
                        <input type="text" className="behavior-keyword" placeholder="feeding" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="behavior-record">Details: </label>
                        <textarea className="detailed-record" placeholder="Enter sighting details here" rows="15" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="sighting-date">Date: </label>
                        <input type="date" placeholder="2019-07-01" min="2000-01-01" max="2019-12-1" required="" />
                    </div>
                    <SubmitButton />
                    <ResetButton />
                </form>
            </div>
        )
    }
}