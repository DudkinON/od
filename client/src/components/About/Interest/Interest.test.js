import React from 'react';
import {shallow} from 'enzyme';
import {Interest} from './index';


describe('Interest', () => {

  const props = {
    header: "test header",
    url: "/test/url",
    onGetInterest: jest.fn()
  };
  const interest = shallow(<Interest {...props}/>);

  it('should render properly', function () {
    expect(interest).toMatchSnapshot();
  });

  it('should display header', function () {
    expect(interest.find('.about__interest-header')
      .text()).toBe(props.header);
  });

  it('should call onGetInterest with given url', function () {
    expect(props.onGetInterest)
      .toHaveBeenCalledWith(props.url);
  });
});