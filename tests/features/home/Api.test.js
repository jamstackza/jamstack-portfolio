import React from 'react';
import { shallow } from 'enzyme';
import { Api } from '../../../src/features/home/Api';

describe('home/Api', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Api {...props} />
    );

    expect(
      renderedComponent.find('.home-api').length
    ).toBe(1);
  });
});
