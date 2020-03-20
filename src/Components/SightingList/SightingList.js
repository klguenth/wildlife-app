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
        };
      }
    
    static defaultProps = {
        match: {
            params: {}
        }
    }

    handleClick = (clickedIndex, e) => {
        this.setState({clickedIndex})
    }

    render() {
        const { sightingId } = this.props.match.params
        return (
            <>
                <header className="listHeader">
                Sighting List
                </header>
                <section className="sightingList">
                    <ul className="sightingList">
                        {this.props.sightings.map((sighting, index) =>
                            <li 
                                key={index} 
                                onClick={(e) => this.handleClick(index, e)}>
                                <Sighting sighting={sighting} clickedIndex={this.state.clickedIndex} index={index} />
                            </li>
                        )}
                    </ul>
                </section>
            </>
        );
    }
}