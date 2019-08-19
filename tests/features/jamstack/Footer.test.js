import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../../src/features/jamstack/Footer';

describe('jamstack/Footer', () => {
  it('renders node with correct class name', () => {
    const props = {
      jamstack: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Footer {...props} />
    );

    expect(
      renderedComponent.find('.jamstack-footer').length
    ).toBe(1);
  });
});
