import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SightingEdit from './SightingEdit.js';

it('renders an edited sighting without crashing', () => {
  const div = document.createElement('div');
  let modifiedSighting = {
    title: 'Dolphins Playing in the Waves',
    sighting_date: '2019-08-30',
    species: 'Atlantic Bottlenose Dolphins',
    sighting_location: 'Sanibel Island, FL',
    brief_description: 'Play',
    detailed_description: 'A small group of dolphins were seen playing in the waves just offshore.',
  }
  ReactDOM.render(
    <BrowserRouter>
        <SightingEdit sighting={modifiedSighting} />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});