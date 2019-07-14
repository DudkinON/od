import React from 'react';
import {shallow} from 'enzyme';
import {SkillCard} from "./SkillCard";

describe('SkillCard', () => {

  const props = {
    id: '1',
    name: 'test name',
    view: '0 0 500 500',
    icon: 'test icon'
  };
  const skillCard = shallow(<SkillCard {...props}/>);

  it('should render properly', function () {
    expect(skillCard).toMatchSnapshot();
  });
});