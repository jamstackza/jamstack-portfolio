import React from 'react';
import { shallow } from 'enzyme';
import { MainNav } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MainNav />);
  expect(renderedComponent.find('.common-main-nav').length).toBe(1);
});
