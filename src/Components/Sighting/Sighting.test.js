import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import Sighting from './Sighting.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let sighting = {
    sighting_id: 1,
    title: 'Dolphins Playing',
    sighting_date: '2019-08-30',
    species: 'Atlantic Bottlenose Dolphins',
    sighting_location: 'Sanibel Island, FL',
    brief_description: 'Play',
    detailed_description: 'A small group of dolphins were seen playing in the waves just offshore.',
  }
  ReactDOM.render(
    <BrowserRouter>
        <Sighting sighting={sighting} />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});