import React from 'react';
import { shallow } from 'enzyme';
import { Markup } from '../../../src/features/home/Markup';

describe('home/Markup', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Markup {...props} />
    );

    expect(
      renderedComponent.find('.home-markup').length
    ).toBe(1);
  });
});
