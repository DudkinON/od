import React from 'react';
import {shallow} from 'enzyme';
import InterestCard from './InterestCard';


describe('InterestCard', () => {

  const props = {
    "id": "1",
    "icon": "icon",
    "view": "0 0 250 250",
    "text": "test text",
    "url": "/interesting/url"
  };
  const interestCard = shallow(<InterestCard {...props}/>);

  global.open = jest.fn();

  it('should render properly', function () {
    expect(interestCard).toMatchSnapshot();
  });

  it('should display passed text', function () {
    expect(interestCard.find('.about__interest-card--text')
      .text()).toBe(props.text);
  });

  it('should display icon', function () {
    expect(interestCard.find('path').props())
      .toHaveProperty('d', props.icon)
  });

  it('should to have property viewBox', function () {
    expect(interestCard.find('svg').props())
      .toHaveProperty('viewBox', props.view)
  });

  it('should open a new window', function () {
    interestCard.find('.about__interest-card').simulate('click');
    expect(global.open).toHaveBeenCalled();
  });
});