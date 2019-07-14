import React from 'react';
import {StaticRouter} from 'react-router-dom'
import {shallow, render} from 'enzyme';
import {Nav} from './Nav';



describe('Nav', () => {
  const props = {
    icon: 'test icon',
    view: '0 0 500 500',
    links: [
      {
        url: '/url',
        name: 'testURL'
      }
    ]
  };
  let nav = shallow(<Nav {...props}/>);

  it('should render correct', function () {
    expect(nav).toMatchSnapshot();
  });

  it('should contains logo viewBox', function () {
    expect(nav.find('svg').props())
      .toHaveProperty('viewBox', props.view);
  });

  it('should contains logo icon', function () {
    expect(nav.find('path').props())
      .toHaveProperty('d', props.icon);
  });

  describe('testing Link', () => {

    beforeAll(() => {
      nav = render(<StaticRouter><Nav {...props}/></StaticRouter>);
    });

    it('should display link name', function () {
      expect(nav.find('.header__nav_link').html()).toContain(props.links[0].name);
    });

    it('should display link url', function () {
      expect(nav.html()).toContain(props.links[0].url);
    });
  });
});

