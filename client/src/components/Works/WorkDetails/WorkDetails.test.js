import React from 'react';
import {shallow} from 'enzyme';
import {WorkDetails} from './index';


describe('WorkDetails', () => {

  const props = {
    url: "/test/url",
    work: {
      id: "1"
    },
    match: {params: {id: "1"}},
    onGetWork: jest.fn()
  };
  const workDetails = shallow(<WorkDetails {...props}/>);

  it('should render properly', function () {
    expect(workDetails).toMatchSnapshot();
  });

  it('should call onGetWork', function () {
    const {url, match} = props;
    expect(props.onGetWork)
      .toHaveBeenCalledWith(`${url}/${match.params.id}`);
  });

  it('should contains DisplayWork component', function () {
    expect(workDetails.find('DisplayWork').exists())
      .toBe(true);
  });

  it('should not contains error block', function () {
    expect(workDetails.find('.work-details__error')
      .exists()).toBe(false);
  });

  describe('if work data was not loaded', () => {
    props.work = {};
    const wrapper = shallow(<WorkDetails {...props}/>);

    it('should not contains DisplayWork component', function () {
      expect(wrapper.find('DisplayWork').exists())
        .toBe(false);
    });

    it('should contains error block', function () {
      expect(wrapper.find('.work-details__error')
        .exists()).toBe(true);
    });
  });
});