import React from 'react';
import { shallow } from 'enzyme';
import { LayoutUiDesktop } from '../../../src/features/jamstack/LayoutUiDesktop';

describe('jamstack/LayoutUiDesktop', () => {
  it('renders node with correct class name', () => {
    const props = {
      jamstack: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LayoutUiDesktop {...props} />
    );

    expect(
      renderedComponent.find('.jamstack-layout-ui-desktop').length
    ).toBe(1);
  });
});
