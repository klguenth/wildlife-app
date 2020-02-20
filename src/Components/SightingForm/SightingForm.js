import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton.js';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import './SightingForm.css';

export default class SightingForm extends React.Component {

    static defaultProps = {
        addSighting: () => {},
    }
    static contextType = ApiContext;

    handleAddSighting = event => {
        event.preventDefault()
        const newSighting = {};
        newSighting.title = event.target.title.value;
        newSighting.sighting_date = event.target.sighting_date.value;
        newSighting.species = event.target.species.value;
        newSighting.sighting_location = event.target.sighting_location.value;
        newSighting.brief_description = event.target.brief_description.value;
        newSighting.detailed_description = event.target.detailed_description.value;

    fetch(`${config.REACT_APP_API_ENDPOINT}/api/sightings`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newSighting)
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then((res) => {
            this.props.history.push(`/sightings`)
        })
        .catch(error => {
            console.error({ error })
        });
    }

    render() {
        return (
            <div id='sightingForm'>
                <header>
                New Sighting
                </header>
                <div id='sightingFormBody'>
                    <form id="record-sighting" onSubmit={this.handleAddSighting}>
                        <div className="form-section">
                            <label htmlFor="sighting-title">Title: </label>
                            <input type="text" id="title" placeholder="Humpbacks Feeding" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="species-name">Species: </label>
                            <input type="text" id="species" placeholder="Humpback Whale" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="behavior-short">Behavior: </label>
                            <input type="text" id="brief_description" placeholder="Feeding" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="sighting-location">Location: </label>
                            <input type="text" id="sighting_location" placeholder="Location" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="sighting-date">Date: </label>
                            <input type="date" id="sighting_date" placeholder="2019-07-01" min="2000-01-01" max="2019-12-1" required="" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="behavior-record">Details: </label>
                            <textarea id="detailed_description" placeholder="Enter sighting details here" rows="15" required />
                        </div>
                        <SubmitButton />
                    </form>
                </div>
            </div>
        );
    }
}