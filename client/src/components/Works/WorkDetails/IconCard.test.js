import React from 'react';
import {shallow} from 'enzyme';
import {IconCard} from './IconCard';


describe('IconCard', () => {

  const props = {
    name: "test name",
    icon: "test icon",
    view: "0 0 500 500"
  };
  const iconCard = shallow(<IconCard {...props}/>);

  it('should render properly', function () {
    expect(iconCard).toMatchSnapshot();
  });

  it('should display icon', function () {
    expect(iconCard.find('svg').props())
      .toHaveProperty('viewBox', props.view);
    expect(iconCard.find('path').props())
      .toHaveProperty('d', props.icon);
  });

  it('should display name', function () {
    expect(iconCard.find('.work-details__icon-card--name')
      .text()).toBe(props.name);
  });
});