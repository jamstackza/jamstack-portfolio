import React from 'react';
import { shallow } from 'enzyme';
import { LandingGreetingModule } from '../../../src/features/home/LandingGreetingModule';

describe('home/LandingGreetingModule', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LandingGreetingModule {...props} />
    );

    expect(
      renderedComponent.find('.home-landing-greeting-module').length
    ).toBe(1);
  });
});
