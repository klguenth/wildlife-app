import React from 'react';
import ApiContext from '../../ApiContext.js';
import config from '../../config.js';
import SightingEdit from '../SightingEditForm/SightingEdit.js';
import { Link } from 'react-router-dom';
import './Sighting.css';

export default class Sighting extends React.Component {
    static defaultProps = {
        onDeleteSighting: () => {},
        onEditSighting: () => {}
    }

    static contextType = ApiContext;

    handleDelete = e => {
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
                    <label htmlFor="collapsible" className="lbl-toggle">{this.props.title}</label>
                        <div className="collapsible-content">
                            <div className="sighting">
                                <div className="sightingTitle">{this.props.title}</div>
                                <div className="sightingDate">{this.props.sighting_date}</div>
                                <div className="sightingSpecies">{this.props.species}</div>
                                <div className="sightingLocation">{this.props.sighting_location}</div>
                                <div className="sightingBehavior">{this.props.brief_description}</div>
                                <p className="sightingDetailedBehavior">{this.props.detailed_description}</p>
                            </div>
                        </div>
                    <button 
                        className='deleteButton'
                        type='button'
                        aria-label='delete button'
                        onClick={this.handleDelete}
                    >
                        Delete
                    </button>
                    <Link to='/edit' component={SightingEdit}>Edit</Link>
                </div>
            </div>
        );
    }
}