import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Sighting from './Sighting.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Sighting />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});