import React from 'react';
import {shallow} from 'enzyme';
import {Skills} from './index';

describe('Skills', () => {
  const props = {
    onGetSkills: jest.fn(),
    skills: []
  };
  const skills = shallow(<Skills {...props}/>);

  it('should render properly', function () {
    expect(skills).toMatchSnapshot();
  });

  it('should call onGetSkills method', function () {
    expect(props.onGetSkills).toHaveBeenCalled();
  });
});