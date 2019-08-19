import React from 'react';
import { shallow } from 'enzyme';
import { LayoutUiDesktop } from '../../../src/features/home/LayoutUiDesktop';

describe('home/LayoutUiDesktop', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LayoutUiDesktop {...props} />
    );

    expect(
      renderedComponent.find('.home-layout-ui-desktop').length
    ).toBe(1);
  });
});
