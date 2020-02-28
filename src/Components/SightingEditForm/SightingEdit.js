import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton.js';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import '../SightingForm/SightingForm.css';


export default class SightingEdit extends React.Component {

    static defaultProps = {
        editSighting: () => {},
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

    handleEditSighting = event => {
        event.preventDefault()
        const id = this.props.location.pathname.slice(14);
        const index = this.findById(id);
        const sightingId = this.context.sightings[index].sighting_id;
        const modifiedSighting = {};
        modifiedSighting.title = event.target.title.value;
        modifiedSighting.sighting_date = event.target.sighting_date.value;
        modifiedSighting.species = event.target.species.value;
        modifiedSighting.sighting_location = event.target.sighting_location.value;
        modifiedSighting.brief_description = event.target.brief_description.value;
        modifiedSighting.detailed_description = event.target.detailed_description.value;
console.log(modifiedSighting);
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/sightings/${sightingId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedSighting),
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res;
        })
        /*.then(() => {
            this.context.editSighting(sightingId)
            this.props.onEditSighting(sightingId)
        })*/
        .then(() => {
            console.log('redirect');
            this.props.history.push(`/sightingList`)
        })
        .catch(error => {
            console.error({ error })
        })
    }
    findById(id) {
        for (let i = 0; i<this.context.sightings.length; i++) {
            if (parseInt(id) === this.context.sightings[i].sighting_id) {
                return i;
            }
        }
    }

    render() {
        let id = this.props.match.params.sighting_id;
        let index = this.findById(id)
        return (
            <ApiContext.Consumer>
                {defaultValue => (
                    <div id='sightingForm'>
                    <header>
                    Edit Sighting
                    </header>
                    <div id='sightingFormBody'>
                        <form id="record-sighting" onSubmit={this.handleEditSighting}>
                            <div className="form-section">
                                <label htmlFor="sighting-title">Title: </label>
                                <input type="text" id="title" defaultValue={this.context.sightings[index].title} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="species-name">Species: </label>
                                <input type="text" id="species" defaultValue={this.context.sightings[index].species} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="behavior-short">Behavior: </label>
                                <input type="text" id="brief_description" defaultValue={this.context.sightings[index].brief_description} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="sighting-location">Location: </label>
                                <input type="text" id="sighting_location" defaultValue={this.context.sightings[index].sighting_location} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="sighting-date">Date: </label>
                                <input type="date" id="sighting_date" min="2000-01-01" max="2020-12-31" defaultValue={this.context.sightings[index].sighting_date.substring(0, 10)} required="" />
                            </div>
                            <div className="form-section">
                                <label htmlFor="behavior-record">Details: </label>
                                <textarea id="detailed_description" rows="15" defaultValue={this.context.sightings[index].detailed_description} required />
                            </div>
                            <SubmitButton />
                        </form>
                    </div>
                </div>

                )}

            </ApiContext.Consumer>
        );
    }
}