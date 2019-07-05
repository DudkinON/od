import React from 'react';
import {shallow} from 'enzyme';
import {Benefit} from './Benefit';

jest.useFakeTimers();

describe('Benefit', () => {

  const props = {
    "id": "1",
    "value": "14580",
    "text": "drank caps of coffee",
    "icon": "icon",
    "view": "0 0 500 500"
  };
  const benefit = shallow(<Benefit {...props}/>);

  it('should render properly', function () {
    expect(benefit).toMatchSnapshot();
  });

  it('should display text', function () {
    expect(benefit.find('.about__benefit-text').text()).toBe(props.text);
  });

  it('should have a icon property', function () {
    expect(benefit.find('path').props())
      .toHaveProperty('d', props.icon);
  });

  it('should have a view property', function () {
    expect(benefit.find('svg').props())
      .toHaveProperty('viewBox', props.view);
  });

  it('should call setInterval', function () {
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 25);
  });

  it('should call clearInterval', function () {
    benefit.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});