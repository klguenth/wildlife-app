import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton.js';
import ResetButton from '../ResetButton/ResetButton.js';
import './SightingForm.css';

export default class SightingForm extends React.Component {
    render() {
        return (
            <div id='sightingFormBody'>
                <header>
                    <h1>New Sighting</h1>
                </header>
                <form id="record-sighting">
                    <div className="form-section">
                        <label htmlFor="sighting-title">Sighting Title: </label>
                        <input type="text" className="sighting-title" placeholder="Humpbacks Feeding" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="species-name">Species Name: </label>
                        <input type="text" className="species-title" placeholder="Humpback Whale" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="behavior-short">Behavior: </label>
                        <input type="text" className="behavior-keyword" placeholder="feeding" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="behavior-record">Detailed Behavior Record: </label>
                        <textarea className="detailed-record" placeholder="Enter sighting details here" rows="15" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="sighting-date">Date of Sighting: </label>
                        <input type="date" placeholder="2019-07-01" min="2000-01-01" max="2019-12-1" required="" />
                    </div>
                    <SubmitButton />
                    <ResetButton />
                </form>
            </div>
        )
    }
}