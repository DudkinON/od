import React from 'react';
import {shallow} from 'enzyme';
import {WorksPage} from './index';


describe('WorksPage', () => {

  const props = {
    works: [
      {id: "1"},
      {id: "2"},
      {id: "3"},
      {id: "4"},
    ],
    onGetWorks: jest.fn(),
    url: '/test/url'
  };
  const worksPage = shallow(<WorksPage {...props}/>);

  it('should render properly', function () {
    expect(worksPage).toMatchSnapshot();
  });

  it('should contains WorksList component', function () {
    expect(worksPage.find('Connect(WorksList)')
      .exists()).toBe(true);
  });

  it('should call onGetWorks', function () {
    expect(props.onGetWorks)
      .toHaveBeenCalledWith(props.url);
  });

});