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
          console.log(data);
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

  renderMainRoutes() {
    return (
      <>
        <Route path='/login' component={Login} />
        <Route path='/sightingForm' component={SightingForm} />
        <Route path="/sightingList" render={() => <SightingList sightings={this.state.sightings} />} />
        <Route path='/signupForm' component={SignUpForm} />
        <Route path='/sightingEdit/:sighting_id' render={(props) => <SightingEdit {...props} />} />
        <Route exact path='/' component={LandingPage} />
      </>
    );
  }

  render() {
    const handleEditSighting = () => {
      console.log('handleEditSighting run');
    }
  
    const handleDeleteSighting = () => {
      console.log('handleDeleteSighting run');
    }

    const value = {
      sightings: this.state.sightings,
      deleteSighting: handleDeleteSighting,
      editSighting: handleEditSighting,
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