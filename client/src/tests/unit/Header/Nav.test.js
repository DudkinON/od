import React from 'react';
import {shallow} from 'enzyme';
import {Nav} from '../../../components/Header/Nav';



describe('Nav', () => {
  const props = {
    links: [
      {
        url: '/url',
        name: 'testURL'
      }
    ]
  };
  const nav = shallow(<Nav {...props}/>);

  it('should render correct', function () {
    expect(nav).toMatchSnapshot();
  });
});

