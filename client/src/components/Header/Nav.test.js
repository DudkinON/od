import React from 'react';
import {StaticRouter} from 'react-router-dom'
import {shallow, render} from 'enzyme';
import {Nav} from './Nav';



describe('Nav', () => {
  const props = {
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

  describe('testing Link', () => {

    beforeAll(() => {
      nav = render(<StaticRouter><Nav {...props}/></StaticRouter>);
    });

    it('should display link name', function () {
      expect(nav.find('.header__nav_link').html()).toContain(props.links[0].name);
    });

    it('should display link url', function () {
      expect(nav.find('li').html()).toContain(props.links[0].url);
    });
  });
});

