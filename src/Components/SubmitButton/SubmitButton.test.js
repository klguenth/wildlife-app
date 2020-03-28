import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SubmitButton from './SubmitButton.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <SubmitButton />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});