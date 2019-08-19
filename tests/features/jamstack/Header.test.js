import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/features/jamstack';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Header />);
  expect(renderedComponent.find('.jamstack-header').length).toBe(1);
});
