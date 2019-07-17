import React from 'react';
import {shallow} from 'enzyme';
import {DisplayWork} from './DisplayWork';


describe('DisplayWork', () => {

  const props = {
    id: "1",
    name: "test name",
    description: "test description",
    links: {
      github: {
        icon: "test icon",
        view: "0 0 500 500"
      }
    },
    img: "/test/img",
    github: "https://some.github/repo",
    icons: [
      {id: "1"}
    ]
  };
  const displayWork = shallow(<DisplayWork {...props}/>);

  it('should render properly', function () {
    expect(displayWork).toMatchSnapshot();
  });

  it('should display name of the work', function () {
    expect(displayWork.find('.work-details__header')
      .text()).toBe(props.name);
  });

  it('should contains image', function () {
    expect(displayWork.find('img').props())
      .toHaveProperty('src', props.img);
  });

  it('should contains IconCard component', function () {
    expect(displayWork.find('IconCard').length)
      .toBe(props.icons.length);
  });

  it('should contains LinkCard component', function () {
    expect(displayWork.find('LinkCard').length)
      .toBe(Object.keys(props.links).length);
  });

  it('should display description', function () {
    expect(displayWork.find('.work-details__description')
      .text()).toBe(props.description);
  });
});