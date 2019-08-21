import React from 'react';
import { shallow } from 'enzyme';
import { Frameworks } from '../../../src/features/home/Frameworks';

describe('home/Frameworks', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Frameworks {...props} />
    );

    expect(
      renderedComponent.find('.home-frameworks').length
    ).toBe(1);
  });
});
