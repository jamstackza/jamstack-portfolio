import React from 'react';
import { shallow } from 'enzyme';
import { Workspace } from '../../../src/features/jamstack/Workspace';

describe('jamstack/Workspace', () => {
  it('renders node with correct class name', () => {
    const props = {
      jamstack: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Workspace {...props} />
    );

    expect(
      renderedComponent.find('.jamstack-workspace').length
    ).toBe(1);
  });
});
