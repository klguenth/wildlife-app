import React from 'react';
import ApiContext from '../../ApiContext.js';
import config from '../../config.js';
import './Sighting.css';
import { Link } from 'react-router-dom';



export default class Sighting extends React.Component {
    static defaultProps = {
        onDeleteSighting: () => {},
        onEditSighting: () => {},
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

    handleDeleteSighting = e => {
        e.preventDefault()
        const sightingId = this.props.sighting.sighting_id;
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
            window.location.reload();
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        const sightingId = this.props.sighting.sighting_id;
        return (
            <div className="wrapper">
                <ul>
                    <li>
                        <input id="collapsible" type="checkbox" className="toggle" />
                        <label htmlFor="collapsible" className="sightingLabel">{this.props.sighting.title}</label>
                        <ul className="sighting">
                            <li>
                                <div className="sightingTitle">{this.props.sighting.title}</div>
                                <div className="sightingDate">{this.props.sighting.sighting_date}</div>
                                <div className="sightingSpecies">{this.props.sighting.species}</div>
                                <div className="sightingLocation">{this.props.sighting.sighting_location}</div>
                                <div className="sightingBehavior">{this.props.sighting.brief_description}</div>
                                <p className="sightingDetailedBehavior">{this.props.sighting.detailed_description}</p>
                                <Link to={`/sightingEdit/${sightingId}`} className='editButton' aria-label='edit button'>Edit</Link>
                                <button 
                                    className='deleteButton'
                                    type='button'
                                    aria-label='delete button'
                                    onClick={this.handleDeleteSighting}
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}