import React from 'react';
import ReactDOM from 'react-dom';
import SortOptions from './SortOptions';

describe('SortOptions', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SortOptions/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});