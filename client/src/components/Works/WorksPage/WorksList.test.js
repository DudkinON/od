import React from 'react';
import {shallow} from 'enzyme';
import {WorksList} from "./WorksList";

describe('WorksList', () => {

  const props = {
    works: [
      {id: "1"},
      {id: "2"},
      {id: "3"},
      {id: "4"},
    ]
  };
  const worksList = shallow(<WorksList {...props}/>);

  it('should render properly', function () {
    expect(worksList).toMatchSnapshot();
  });

  it('should contains WorkCard component', function () {
    expect(worksList.find('WorkCard').length)
      .toBe(props.works.length);
  });
});