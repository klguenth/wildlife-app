import React from 'react';
import Nav from './Components/Nav/Nav.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import SightingForm from './Components/SightingForm/SightingForm.js';
import SightingList from './Components/SightingList/SightingList.js';
import SightingEdit from './Components/SightingEditForm/SightingEdit.js';
import config from './config';
import ApiContext from './ApiContext';
import { findSighting } from './sightings-helpers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true,
      sightings: [],
    };
    this.handleDeleteSighting = this.handleDeleteSighting.bind(this);
  }

//performs initial fetch of sightings
  componentDidMount() {
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/sightings/`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          sightings: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

//renders all routes for application
  renderMainRoutes() {
    return (
      <>
        <Route path='/sightingForm' component={SightingForm} />
        <Route path='/sightingList' render={() => <SightingList sightings={this.state.sightings} component={SightingList}/>} />
        <Route path='/sightingEdit/:sighting_id' render={(props) => <SightingEdit {...props} />} />
        <Route exact path='/' component={LandingPage} />
      </>
    );
  }

//sets state for sighting edits
  handleEditSighting = (sighting) => {
    const index = findSighting(this.state.sightings, sighting.sighting_id);
    const sightings = this.state.sightings;
    this.setState = ({
      sightings: sightings.splice(index, 1, sighting)
    })
  }

//sets state for sighting delete
  handleDeleteSighting = (sighting) => {
    const index = findSighting(this.state.sightings, sighting);
    const sightings = this.state.sightings;
    this.setState = ({
      sightings: sightings.splice(index, 1)
    })
  }

  render() {
    const value = {
      sightings: this.state.sightings,
      deleteSighting: this.handleDeleteSighting,
      editSighting: this.handleEditSighting,
    };

    return (
      <ApiContext.Provider value={value}>
        <div className='nav'>
          <Nav loggedIn={this.state.loggedIn} />
        </div>
        <main className='app'>
          {this.renderMainRoutes()}
        </main>
      </ApiContext.Provider>
    );
  }
}