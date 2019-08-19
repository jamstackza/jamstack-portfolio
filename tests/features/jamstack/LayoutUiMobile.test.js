import React from 'react';
import { shallow } from 'enzyme';
import { LayoutUiMobile } from '../../../src/features/jamstack/LayoutUiMobile';

describe('jamstack/LayoutUiMobile', () => {
  it('renders node with correct class name', () => {
    const props = {
      jamstack: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LayoutUiMobile {...props} />
    );

    expect(
      renderedComponent.find('.jamstack-layout-ui-mobile').length
    ).toBe(1);
  });
});
