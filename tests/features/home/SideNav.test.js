import React from 'react';
import { shallow } from 'enzyme';
import { SideNav } from '../../../src/features/home/SideNav';

describe('home/SideNav', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SideNav {...props} />
    );

    expect(
      renderedComponent.find('.home-side-nav').length
    ).toBe(1);
  });
});
