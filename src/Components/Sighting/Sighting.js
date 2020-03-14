import React from 'react';
import ApiContext from '../../ApiContext.js';
import config from '../../config.js';
import './Sighting.css';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';



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
            console.log(this.context);
            this.context.deleteSighting(sightingId)
            this.props.onDeleteSighting(sightingId)
            this.props.history(`/sightingList`);
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        const sightingId = this.props.sighting.sighting_id; 
        let sighting;
        if (this.props.clickedIndex === this.props.index) {
            sighting = (
                <li>
                    <div className="sightingTitle">Title: {this.props.sighting.title}</div>
                    <div className="sightingDate">Date: {format(parseISO(this.props.sighting.sighting_date), 'MMM dd yyyy')}</div>
                    <div className="sightingSpecies">Species: {this.props.sighting.species}</div>
                    <div className="sightingLocation">Location: {this.props.sighting.sighting_location}</div>
                    <div className="sightingBehavior">Behavior: {this.props.sighting.brief_description}</div>
                    <p className="sightingDetailedBehavior">Details: {this.props.sighting.detailed_description}</p>
                    <Link to={`/sightingEdit/${sightingId}`} className="editButton" aria-label="edit button">Edit</Link>
                    <button className="deleteButton" type="button" aria-label="delete button" onClick={this.handleDeleteSighting}>Delete</button>
                </li>
            )
        } else {
            sighting = (
                <li>
                    <div className="sightingTitle">{this.props.sighting.title}</div>
                </li>
            );
        }
        return (
            <ApiContext.Consumer>
                {defaultValue => (
                    <div className="wrapper">
                        <ul>
                            <li>
                            <input id="collapsible" type="checkbox" className="toggle" />
                                <ul className="sighting" defaultValue={this.handleDeleteSighting}>
                                    {sighting}
                                </ul>
                            </li>
                        </ul>
                    </div>
                )}

            </ApiContext.Consumer>

        );
    }
}