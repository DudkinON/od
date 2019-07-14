import React from 'react';
import {shallow} from 'enzyme';
import {Skills} from './index';


describe('Skills', () => {

  const skills = shallow(<Skills />);

  it('should render properly', function () {
    expect(skills).toMatchSnapshot();
  });
});