import React from 'react';
import {shallow} from 'enzyme';
import SkillCategory from './SkillCategory';


describe('SKillCategory', () => {

  const props = {
    header: 'test header',
    content: [{id: "1"},{id: "2"}]
  };

  const skillsCategory = shallow(<SkillCategory {...props}/>);

  it('should render properly', function () {
    expect(skillsCategory).toMatchSnapshot();
  });

  it('should display passed header', function () {
    expect(skillsCategory.find('.skills__category').text()).toBe(props.header);
  });

  it('should add skills to the state after click', function () {

    // check that state is empty
    expect(skillsCategory.state().skills).toMatchObject([]);

    // simulate a click
    skillsCategory.find('.skills__category').simulate('click');

    // check that state contains passed content
    expect(skillsCategory.state().skills).toMatchObject(props.content);
  });

  it('should remove objects from the state on click', function () {

    // set content to the state
    skillsCategory.setState({skills: props.content});

    // simulate a click
    skillsCategory.find('.skills__category').simulate('click');

    // check that state is empty
    expect(skillsCategory.state().skills).toMatchObject([]);
  });
});