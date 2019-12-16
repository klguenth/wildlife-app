import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './Sighting';

describe('Sighting', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sighting />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});