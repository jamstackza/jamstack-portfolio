import React from 'react';
import { shallow } from 'enzyme';
import { Landing } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Landing />);
  expect(renderedComponent.find('.home-landing').length).toBe(1);
});
