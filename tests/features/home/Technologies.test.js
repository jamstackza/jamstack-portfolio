import React from 'react';
import { shallow } from 'enzyme';
import { Technologies } from '../../../src/features/home/Technologies';

describe('home/Technologies', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Technologies {...props} />
    );

    expect(
      renderedComponent.find('.home-technologies').length
    ).toBe(1);
  });
});
