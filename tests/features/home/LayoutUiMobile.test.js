import React from 'react';
import { shallow } from 'enzyme';
import { LayoutUiMobile } from '../../../src/features/home/LayoutUiMobile';

describe('home/LayoutUiMobile', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LayoutUiMobile {...props} />
    );

    expect(
      renderedComponent.find('.home-layout-ui-mobile').length
    ).toBe(1);
  });
});
