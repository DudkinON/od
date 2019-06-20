import React from "react";
import {shallow} from "enzyme";
import Header from './index';


describe('Header', function () {

  const header = shallow(<Header />);

  it('should render correctly', function () {
    expect(header).toMatchSnapshot();
  });

  it('should contains Nav component', function () {
    expect(header.find('Connect(Nav)').exists()).toBe(true);
  });
});