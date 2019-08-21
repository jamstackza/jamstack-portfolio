import React from 'react';
import { shallow } from 'enzyme';
import { CssCard } from '../../../src/features/common/CssCard';

describe('common/CssCard', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CssCard {...props} />
    );

    expect(
      renderedComponent.find('.common-css-card').length
    ).toBe(1);
  });
});
