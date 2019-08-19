import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/jamstack/DefaultPage';

describe('jamstack/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      jamstack: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.jamstack-default-page').length
    ).toBe(1);
  });
});
