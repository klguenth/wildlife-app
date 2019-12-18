import React from 'react';
import Nav from './Components/Nav/Nav.js';
import SignUpForm from './Components/SignUpForm/SignUpForm.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import Login from './Components/Login/Login.js';
import SightingForm from './Components/SightingForm/SightingForm.js';
import SightingList from './Components/SightingList/SightingList.js';
import { Route } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderRoutes() {
    return (
      <>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={Login} />
        <Route path='/sightingForm' component={SightingForm} />
        <Route path='/sightingList' component={SightingList} />
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
        <Nav />
        <main id='App'>
          <div class='blurred-box'>
            <header className="appTitle">
              <h1>Wildlife Watch</h1>
            </header>
            <section className="mainSection">
              <h2 className="conserveQuote">"In the end we will conserve only what we love; we will love only what we understand; we will understand only what we are taught." -Baba Dioum</h2>
              <div className="wwSummary">
                <h3>Get closer to the natural world.</h3>
                <h4>Wildlife Watch provides a space to share and record wildlife sightings with the ultimate desire to foster curiousity and inspire conservation efforts around the world.</h4>
              </div>
              <div className="wwSummary">
                <h3>Simplistic Sightings</h3>
                <h4>We created a clean, stylized interface to record and view animal sightings.</h4>
              </div>
              <div className="wwSummary">
                <h3>Track Species</h3>
                <h4>Record Species, behavior, and track animal sightings over time.</h4>
              </div>
              <div className="wwSummary">
                <SignUpForm />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}