import React from 'react';
import { shallow } from 'enzyme';
import { LandingSwiper } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LandingSwiper />);
  expect(renderedComponent.find('.common-landing-swiper').length).toBe(1);
});
