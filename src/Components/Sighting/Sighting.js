import React from 'react';
import ApiContext from '../../ApiContext.js';
import config from '../../config.js';
import { Link } from 'react-router-dom';
import './Sighting.css';

export default class Sighting extends React.Component {
    static defaultProps = {
        onDeleteSighting: () => {},
        onEditSighting: () => {}
    }

    static contextType = ApiContext;

    handleEditSighting = e => {
        e.preventDefault()
        const sightingId = this.props.sighting.sighting_id
        const sighting = this.props.sighting;
        /*sighting.title = this.props.title.value;
        sighting.sighting_date = this.props.sighting_date.value;
        sighting.species = this.props.species.value;
        sighting.sighting_location = this.props.sighting_location.value;
        sighting.brief_description = this.props.brief_description.value;
        sighting.detailed_description = this.props.detailed_description.value;*/
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/sightings/${sightingId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sighting),
        })
        .then(res => {
            console.log(res);
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res;
        })
        .then(() => {
            console.log(this.context);
            this.context.editSighting(sightingId)
            this.props.onEditSighting(sightingId)
        })
        .catch(error => {
            console.error({ error })
        })
    }


    handleDeleteSighting = e => {
        e.preventDefault()
        const sightingId = this.props.sighting_id
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/sightings/${sightingId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then( res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res;
        })
        .then(() => {
            this.context.deleteSighting(sightingId)
            this.props.onDeleteSighting(sightingId)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        return (
            <div>
                <div className="wrap-collapsible">
                    <input id="collapsible" type="checkbox" className="toggle" />
                    <label htmlFor="collapsible" className="lbl-toggle">{this.props.sighting.title}</label>
                        <div className="collapsible-content">
                            <div className="sighting">
                                <div className="sightingTitle">{this.props.sighting.title}</div>
                                <div className="sightingDate">{this.props.sighting.sighting_date}</div>
                                <div className="sightingSpecies">{this.props.sighting.species}</div>
                                <div className="sightingLocation">{this.props.sighting.sighting_location}</div>
                                <div className="sightingBehavior">{this.props.sighting.brief_description}</div>
                                <p className="sightingDetailedBehavior">{this.props.sighting.detailed_description}</p>
                            </div>
                        </div>
                    <button 
                        className='deleteButton'
                        type='button'
                        aria-label='delete button'
                        onClick={this.handleDeleteSighting}
                    >
                        Delete
                    </button>
                    <button
                        className='editButton'
                        type='button'
                        aria-label='edit button'
                        onClick={this.handleEditSighting}
                        component={Link} to="/edit"
                    >
                        Edit
                    </button>
                </div>
            </div>
        );
    }
}