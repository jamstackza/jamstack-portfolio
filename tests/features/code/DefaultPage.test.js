import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/code/DefaultPage';

describe('code/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      code: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.code-default-page').length
    ).toBe(1);
  });
});
