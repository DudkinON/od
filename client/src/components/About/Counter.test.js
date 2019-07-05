import React from 'react';
import {shallow} from 'enzyme';
import {Counter} from './Counter';


describe('Counter', () => {

  const props = {
    benefits: [{id: 1},{id: 2},{id: 3}]
  };
  const counter = shallow(<Counter {...props}/>);

  it('should render properly', function () {
    expect(counter).toMatchSnapshot();
  });

  it('should display Benefit component', function () {
    expect(counter.find('Benefit').length).toBe(props.benefits.length);
  });
});