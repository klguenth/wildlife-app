import React from 'react';
import ReactDOM from 'react-dom';
import FilterOptions from './FilterOptions';

describe('FilterOptions', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterOptions/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});