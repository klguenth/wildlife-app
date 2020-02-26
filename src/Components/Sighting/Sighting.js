import React from 'react';
import ApiContext from '../../ApiContext.js';
import config from '../../config.js';
import './Sighting.css';
import { Link } from 'react-router-dom';



export default class Sighting extends React.Component {
    static defaultProps = {
        onDeleteSighting: () => {},
        onEditSighting: () => {}
    }

    static contextType = ApiContext;

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
        //const sighting = this.props.match;
        const sightingId = this.props.sighting.sighting_id;
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
                    <Link to={`/sightingEdit/${sightingId}`} className='editButton' aria-label='edit button'>Edit</Link>
                </div>
            </div>
        );
    }
}