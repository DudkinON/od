import React from "react";
import {shallow} from "enzyme";
import {Nav} from '../../../components/Header/Nav';


it('should render correct', function () {
  const nav = shallow(<Nav />);
  expect(nav).toMatchSnapshot();
});
