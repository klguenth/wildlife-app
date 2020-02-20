import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton.js';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import '../SightingForm/SightingForm.css';

export default class SightingEdit extends React.Component {

    static defaultProps = {
        editSighting: () => {},
    }
    static contextType = ApiContext;

    handleEditSighting = event => {
        event.preventDefault()
        const sightingId = this.props.sighting_id
        const modifiedSighting = {};
        modifiedSighting.title = event.target.title.value;
        modifiedSighting.sighting_date = event.target.sighting_date.value;
        modifiedSighting.species = event.target.species.value;
        modifiedSighting.sighting_location = event.target.sighting_location.value;
        modifiedSighting.brief_description = event.target.brief_description.value;
        modifiedSighting.detailed_description = event.target.detailed_description.value;
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/sightings/edit/${sightingId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedSighting)
        })
        .then(() => {
            this.context.editSighting(sightingId)
            this.props.onEditSighting(sightingId)
        })
        .then(() => {
            this.props.history.push(`/sightings`)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        const { sightingId } = this.props.match.params
        return (
            <div id='sightingForm'>
                <header>
                Edit Sighting
                </header>
                <div id='sightingFormBody'>
                    <form id="record-sighting" onSubmit={this.handleEditSighting}>
                        <div className="form-section">
                            <label htmlFor="sighting-title">Title: </label>
                            <input type="text" id="title" value={this.context.sightings[sightingId].title} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="species-name">Species: </label>
                            <input type="text" id="species" value={this.context.sightings[sightingId].species} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="behavior-short">Behavior: </label>
                            <input type="text" id="brief_description" value={this.context.sightings[sightingId].brief_description} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="sighting-location">Location: </label>
                            <input type="text" id="sighting_location" value={this.context.sightings[sightingId].sighting_location} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="sighting-date">Date: </label>
                            <input type="date" id="sighting_date" min="2000-01-01" max="2019-12-1" value={this.context.sightings[sightingId].sighting_date} required="" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="behavior-record">Details: </label>
                            <textarea id="detailed_description" rows="15" value={this.context.sightings[sightingId].detailed_description} required />
                        </div>
                        <SubmitButton />
                    </form>
                </div>
            </div>
        );
    }
}