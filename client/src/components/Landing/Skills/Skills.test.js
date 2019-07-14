import React from 'react';
import {shallow} from 'enzyme';
import {Skills} from './index';

describe('Skills', () => {
  const props = {
    onGetCategories: jest.fn(),
    categories: [],
    header: "skills",
    url: "/uri/to/skills"
  };
  const skills = shallow(<Skills {...props}/>);

  it('should render properly', function () {
    expect(skills).toMatchSnapshot();
  });

  it('should call onGetSkills method', function () {
    expect(props.onGetCategories).toHaveBeenCalledWith(props.url);
  });

  it('should display header', function () {
    expect(skills.find('.skills__header--text').text()).toContain(props.header)
  });
});