import React from 'react';
import ApiContext from '../../ApiContext.js';
import config from '../../config.js';
import './Sighting.css';

export default class Sighting extends React.Component {
    static defaultProps = {
        onDeleteSighting: () => {},
    }

    static contextType = ApiContext;

    handleDelete = e => {
        e.preventDefault()
        const sightingId = this.props.sighting_id
        console.log(sightingId);
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
            this.deleteSighting(sightingId)
            this.props.onDeleteSighting(sightingId)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        //const { title, date, species, location, behavior, detailed_behavior } = this.props
        return (
            <div>
                <div className="wrap-collapsible">
                    <input id="collapsible" type="checkbox" className="toggle" />
                    <label htmlFor="collapsible" className="lbl-toggle"> Title</label>
                        <div className="collapsible-content">
                            <div className="sighting">
                                <div className="sightingTitle">Title: This is an example title{this.props.title}</div>
                                <div className="sightingDate">Date: This is an example date{this.props.date}</div>
                                <div className="sightingSpecies">Species: This is an example species{this.props.species}</div>
                                <div className="sightingLocation">Location: This is an example location{this.props.location}</div>
                                <div className="sightingBehavior">Behavior: This is an example behavior{this.props.brief_behavior}</div>
                                <p className="sightingDetailedBehavior">Details: This is example detail. This is example detail. This is example detail.{this.props.detailed_behavior}</p>
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
                </div>
            </div>
        );
    }
}