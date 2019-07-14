import React from 'react';
import {shallow} from 'enzyme';
import {SkillsPage} from './index';


describe('SkillsPage', () => {

  const props = {
    header: 'Test header',
    url: '/skills',
    skills: [{id: '1'},{id: '2'},{id: '3'}],
    onGetSkills: jest.fn()
  };
  const skillsPage = shallow(<SkillsPage {...props}/>);

  it('should render properly', function () {
    expect(skillsPage).toMatchSnapshot();
  });

  it('should call onSetTopSkills', function () {
    expect(props.onGetSkills).not.toHaveBeenCalled();
  });

  describe('if skills empty array', () => {
    const propsEmpty = {...props};
    propsEmpty.skills = [];
    propsEmpty.onGetSkills = jest.fn();

    shallow(<SkillsPage {...propsEmpty}/>);

    it('should call onGetSkills', function () {
      expect(propsEmpty.onGetSkills).toHaveBeenCalled();
    });
  });

  it('should contains `Content` component', function () {
    expect(skillsPage.find('Connect(Content)')
      .exists()).toBe(true);
  });
});