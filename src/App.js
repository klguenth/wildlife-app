import React from 'react';
import Nav from './Components/Nav/Nav.js';
import Header from './Components/Header/Header.js';
import SignUpForm from './Components/SignUpForm/SignUpForm.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import Login from './Components/Login/Login.js';
import SightingForm from './Components/SightingForm/SightingForm.js';
import SightingList from './Components/SightingList/SightingList.js';
import { Route, Link } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderMainRoutes() {
    return (
      <>
        <Route path='/login' component={Login} />
        <Route path='/sightingForm' component={SightingForm} />
        <Route path='/sightingList' component={SightingList} />
        <Route path='/signupForm' component={SignUpForm} />
        <Route path='/landingPage' component={LandingPage} />
      </>
    );
  }


  sightings = [
    {
      id: 0,
      briefDescription: 'Sea Otters Rafting',
      species: 'Sea Otters',
      detailedDescription: 'Sea otters sleeping in groups. Sea otters will often hold hands while they sleep in order to not drift away from each other. This behavior is called rafting. 6 otters were observed rafting together.',
      location: 'Monterey, California',
      date: '/*look up how to enter date*/',
    },
    {
      id: 1,
      briefDescription: 'Humpback Whales Breaching',
      species: 'Humpback Whales',
      detailedDescription: 'Humpback whales breach for a variety of reasons: most often breaching is a way to communicate. It can also be used as a hunting method to stun prey, and sometimes to simply scratch an itch. A small family group of 4 whales were observed breaching together as a form of play.',
      location: 'Los Angeles, California',
      date: '/*look up how to enter date*/',
    },
    {
      id: 2,
      briefDescription: 'Bottlenose Dolphins Hunting',
      species: 'Bottlenose Dolphins',
      detailedDescription: 'Bottlenose Dolphins hunting together in a group. Some dolphins would school the prey together while others fed, and then the roles would switch.',
      location: 'San Francisco, California',
      date: '/*look up how to enter date*/',
    }
  ];

  render() {
    return (
      <div>
        <div className="nav">
          <Nav />
        </div>
        <header className='header'>
          <Header />
        </header>
        <main className='App'>
          <section className="mainSection">
            {this.renderMainRoutes()}
          </section>
        </main>
      </div>
    );
  }
}