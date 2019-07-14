import React from 'react';
import {shallow} from 'enzyme';
import {Content} from "./index";


describe('Content', () => {

  const props = {
    skills: [
      {id: '1'},
      {id: '2'},
      {id: '3'},
      {id: '4'}
    ]
  };
  const content = shallow(<Content {...props}/>);

  it('should render properly', function () {
    expect(content).toMatchSnapshot();
  });
});