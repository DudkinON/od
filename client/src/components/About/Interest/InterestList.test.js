import React from 'react';
import {shallow} from 'enzyme';
import {InterestList} from './InterestList';

describe('InterestList', () => {

  const props = {
    interest: [{id: "1"}, {id: "2"}, {id: "3"}]
  };
  const interestList = shallow(<InterestList {...props}/>);

  it('should render properly', function () {
    expect(interestList).toMatchSnapshot();
  });

  it('should display InterestCard component', function () {
    expect(interestList.find('InterestCard').length)
      .toBe(props.interest.length);
  });
});