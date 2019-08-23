import React from 'react';
import { shallow } from 'enzyme';
import { SideSwipe } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SideSwipe />);
  expect(renderedComponent.find('.common-side-swipe').length).toBe(1);
});
