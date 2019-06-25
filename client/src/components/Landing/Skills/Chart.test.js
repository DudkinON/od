import React from 'react';
import {shallow} from 'enzyme';
import {Chart} from './Chart/index';

describe('Chart', () => {

  const props = {name: "test name"};

  const chart = shallow(<Chart {...props}/>);

  it('should render properly', function () {
    expect(chart).toMatchSnapshot();
  });

  it('should contains passed name', function () {
    expect(chart.html()).toContain(props.name);
  });
});