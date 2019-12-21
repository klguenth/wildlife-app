import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton.js';
import Nav from '../Nav/Nav.js';

export default class SightingForm extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <header>
                    <h1>New Sighting</h1>
                </header>
                <form id="record-sighting">
                    <div className="form-section">
                        <label for="sighting-title">Sighting Title</label>
                        <input type="text" name="sighting-title" placeholder="Humpbacks Feeding" required />
                    </div>
                    <div className="form-section">
                        <label for="species-name">Species Name</label>
                        <input type="text" name="species-title" placeholder="Humpback Whale" required />
                    </div>
                    <div className="form-section">
                        <label for="behavior-short">Behavior</label>
                        <input type="text" name="behavior-keyword" placeholder="feeding" required />
                    </div>
                    <div className="form-section">
                        <label for="behavior-record">Detailed Behavior Record</label>
                        <textarea name="behavior-record" rows="15" required />
                    </div>
                    <div className="form-section">
                        <p className="sighting-date">Date of Sighting</p>
                        <input type="number" name="date-month" placeholder="01" min="1" max="12" required="" />
                        <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required="" />
                        <input type="number" name="date-year" className="date-year" placeholder="2019" min="1900" max="2020" required="" />
                    </div>
                    <SubmitButton />
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}