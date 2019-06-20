import React from 'react';
import {shallow} from 'enzyme';
import {Landing} from './index';


describe('Landing', () => {

  const landing = shallow(<Landing/>);

  it('should render properly', function () {
    expect(landing).toMatchSnapshot();
  });

  it('should contains `CenterBlock` component', function () {
    expect(landing.find('Connect(CenterBlock)').exists()).toBe(true);
  });
});