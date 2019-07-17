import React from 'react';
import {shallow} from 'enzyme';
import {LinkCard} from './LinkCard';


describe('LinkCard', () => {

  const props = {
    icon: {
      icon: 'test icon',
      view: '0 0 500 500'
    },
    name: 'Test Name',
    url: 'https://test.url'
  };
  const linkCard = shallow(<LinkCard {...props}/>);
  global.open = jest.fn();

  it('should render properly', function () {
    expect(linkCard).toMatchSnapshot();
  });

  it('should display icon', function () {
    expect(linkCard.find('svg').props())
      .toHaveProperty('viewBox', props.icon.view);
    expect(linkCard.find('path').props())
      .toHaveProperty('d', props.icon.icon);
  });

  it('should call open method when user click icon', function () {
    linkCard.find('.work-details__link-card--icon').simulate('click');
    expect(global.open).toHaveBeenCalled();
  });
});