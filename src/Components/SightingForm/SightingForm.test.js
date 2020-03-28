import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SightingForm from './SightingForm.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <SightingForm />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});