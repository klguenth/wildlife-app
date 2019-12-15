import React from 'react';
import Nav from './Components/Nav/Nav.js';
import './App.css';

export default class App extends React.Component {
  
  const sightings = [
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
  ]
  
  constructor(props) {
    super(props)
    this.state = {
      sightings,
    }
  }

  render() {
    return (
      <main id='App'>
        <Nav />
      </main>
    );
  }
}
