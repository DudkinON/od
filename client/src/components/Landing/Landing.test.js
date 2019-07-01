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

  it('should contains Skills component', function () {
    expect(landing.find('Connect(Skills)').exists()).toBe(true);
  });

  it('should contains Certificates component', function () {
    expect(landing.find('Connect(Certificates)').exists()).toBe(true);
  });

  it('should contains Works component', function () {
    expect(landing.find('Connect(Works)').exists()).toBe(true);
  });

  it('should contains Contact component', function () {
    expect(landing.find('Connect(Contact)').exists()).toBe(true);
  });
});