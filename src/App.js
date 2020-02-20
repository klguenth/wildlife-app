import React from 'react';
import Nav from './Components/Nav/Nav.js';
import SignUpForm from './Components/SignUpForm/SignUpForm.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import Login from './Components/Login/Login.js';
import SightingForm from './Components/SightingForm/SightingForm.js';
import SightingList from './Components/SightingList/SightingList.js';
import SightingEdit from './Components/SightingEditForm/SightingEdit.js';
import config from './config';
import ApiContext from './ApiContext';
import { Route } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true,
      sightings: []
    };
  }

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

  /*sightings = [
    {title: 'Sea Otters Rafting', date: '10/03/2019', species: 'North American Sea Otter', location: 'Monterey, CA', behavior: 'sleeping', detailedBehavior: 'A group of 4 Sea Otters sleeping together in a raft. Sea Otters were noticed to be linking paws to prevent drifting apart while they slept, called "rafting"'},
    {title: 'Humpback Whales Breaching', date: '8/30/2019', species: 'Humpback Whales', location: 'San Francisco, CA', behavior: 'playing', detailedBehavior: 'A group of 6 Humpback Whales were observed displaying breaching behavior. It appeared to be a playful behavior, as prey did not seem to be in the area. They were observed for about 15 minutes to be breaching and chasing each other.'},
    {title: 'White Shark Feeding', date: '9/12/2019', species: 'White Shark', location: 'Santa Barbara, CA', behavior: 'feeding', detailedBehavior: 'A single White Shark was observed feeding on a whale carcass just offshore. It appeared to be a juvenile male, and was not at all concerned with the presence of observers. It was singularly focused on the food and seemed to gorge itself.'},
];

  handleDeleteSighting = sightingId => {
    this.setState({
      sightings: this.state.sightings.filter(sighting => sighting.sighting_id !== sightingId)
    });
  };

  handleAddSighting = sighting => {
    this.setState({
      sightings: [...this.state.sightings, sighting]
    });
  };

  handleEditSighting = sightingId => {
    this.setState({
      sightings: [...this.state.sightings]
    });
  };*/

  renderMainRoutes() {
    return (
      <>
        <Route path='/login' component={Login} />
        <Route path='/sightingForm' component={SightingForm} />
        <Route path="/sightingList" render={() => <SightingList sightings={this.state.sightings} />} />
        <Route path='/signupForm' component={SignUpForm} />
        <Route path='/edit' component={SightingEdit} />
        <Route exact path='/' component={LandingPage} />
      </>
    );
  }

  render() {
    const value = {
      sightings: this.state.sightings,
      deleteSighting: this.handleDeleteSighting,
      editSighting: this.handleEditSighting,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="nav">
          <Nav loggedIn={this.state.loggedIn} />
        </div>
        <main className='app'>
          {this.renderMainRoutes()}
        </main>
      </ApiContext.Provider>
    );
  }
}