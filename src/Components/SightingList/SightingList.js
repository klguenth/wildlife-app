import React from 'react';
import ApiContext from '../../ApiContext';
import Sighting from '../Sighting/Sighting.js';
import { findSighting } from '../../sightings-helpers';

export default class SightingList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          clickedIndex: null,
          sightings: []
        };
      }
    
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    handleClick = (clickedIndex, e) => {
        this.setState({clickedIndex})
    }

    render() {
        const value = {
            sightings: this.state.sightings,
          };
        const { sightingId } = this.props.match.params
        const sightings = sightingId
            ? findSighting(this.props.sightings, sightingId)
            : this.props.sightings;
        return (
            <ApiContext.Provider value={value}>
                <header className="listHeader">
                Sighting List
                </header>
                <section className="sightingList">
                    <ul className="sightingList">
                        {sightings.map((sighting, index) =>
                            <li 
                                key={sighting.sighting_id} 
                                onClick={(e) => this.handleClick(index, e)}>
                                <Sighting sighting={sighting} clickedIndex={this.state.clickedIndex} index={index} />
                            </li>
                        )}
                    </ul>
                </section>
            </ApiContext.Provider>
        );
    }
}