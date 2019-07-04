import React from 'react';
import {shallow} from 'enzyme';
import {About} from './index';


describe('About', () => {

  const about = shallow(<About/>);

  it('should render properly', function () {
    expect(about).toMatchSnapshot();
  });
});