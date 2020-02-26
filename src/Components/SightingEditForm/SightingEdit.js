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
    componentDidMount() {
        console.log('context test', this.context);
    }

    handleEditSighting = event => {
        event.preventDefault()
        let index = this.props.location.pathname.slice(14);
        const sightingId = this.context.sightings[index].sighting_id;
        const modifiedSighting = {};
        modifiedSighting.title = event.target.title;
        modifiedSighting.sighting_date = event.target.sighting.sighting_date;
        modifiedSighting.species = event.target.sighting.species;
        modifiedSighting.sighting_location = event.target.sighting.sighting_location;
        modifiedSighting.brief_description = event.target.sighting.brief_description;
        modifiedSighting.detailed_description = event.target.sighting.detailed_description;
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
        .then(() => {
            console.log(this.context);
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
    findById(id) {
        for (let i = 0; i<this.context.sightings.length; i++) {
            console.log(this.context);
            if (id === this.context.sightings[i].sighting_id) {
                return i;
            }
        }
    }

    render() {
        let id = this.props.match.params.sighting_id;
        //location.pathname.slice(14);
        let index = this.findById(id)
        console.log(this.context.sightings);
        return (
            <ApiContext.Consumer>
                <div id='sightingForm'>
                    <header>
                    Edit Sighting
                    </header>
                    <div id='sightingFormBody'>
                        <form id="record-sighting" onSubmit={this.handleEditSighting}>
                            <div className="form-section">
                                <label htmlFor="sighting-title">Title: </label>
                                <input type="text" id="title" value={this.context.sightings[index].title} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="species-name">Species: </label>
                                <input type="text" id="species" value={this.context.sightings[index].species} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="behavior-short">Behavior: </label>
                                <input type="text" id="brief_description" value={this.context.sightings[index].brief_description} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="sighting-location">Location: </label>
                                <input type="text" id="sighting_location" value={this.context.sightings[index].sighting_location} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="sighting-date">Date: </label>
                                <input type="date" id="sighting_date" min="2000-01-01" max="2019-12-1" value={this.context.sightings[index].sighting_date} required="" />
                            </div>
                            <div className="form-section">
                                <label htmlFor="behavior-record">Details: </label>
                                <textarea id="detailed_description" rows="15" value={this.context.sightings[index].detailed_description} required />
                            </div>
                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </ApiContext.Consumer>
        );
    }
}