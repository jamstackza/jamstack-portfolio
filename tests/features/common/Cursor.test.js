import React from 'react';
import { shallow } from 'enzyme';
import { Cursor } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Cursor />);
  expect(renderedComponent.find('.common-cursor').length).toBe(1);
});
