import React from 'react';
import { shallow } from 'enzyme';
import { Security } from '../../../src/features/home/Security';

describe('home/Security', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Security {...props} />
    );

    expect(
      renderedComponent.find('.home-security').length
    ).toBe(1);
  });
});
