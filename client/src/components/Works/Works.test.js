import React from 'react';
import {shallow} from 'enzyme';
import {Works} from './index';


describe('Works', () => {

  const works = shallow(<Works/>);

  it('should render properly', function () {
    expect(works).toMatchSnapshot();
  });
});