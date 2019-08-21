import React from 'react';
import { shallow } from 'enzyme';
import { Devops } from '../../../src/features/home/Devops';

describe('home/Devops', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Devops {...props} />
    );

    expect(
      renderedComponent.find('.home-devops').length
    ).toBe(1);
  });
});
