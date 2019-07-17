import React from 'react';
import {shallow} from "enzyme";
import {WorkCard} from './WorkCard';
import {MemoryRouter as Router} from 'react-router-dom';


describe('WorkCard', () => {

  const props = {
    id: 1,
    name: "Name of the work",
    description: "description of the work",
    img: "/img/path",
    icons: [
      {
        id: "1",
        name: "test name",
        icon: "test icon",
        view: "0 0 512 512"
      }
    ]
  };
  const wrapped = shallow(<Router><WorkCard {...props}/></Router>);
  const workCard = wrapped.find('WorkCard').dive();

  it('should render properly', function () {
    expect(workCard).toMatchSnapshot();
  });

  it('should render link with passed attributes', function () {
    expect(workCard.find('.works__card').props())
      .toHaveProperty('to', `${props.url}/${props.id}`)
  });

  it('should contains icon', function () {
    expect(workCard.find('.works__card-icon').length)
      .toBe(props.icons.length);
  });

  it('should display icon', function () {
    expect(workCard.find('svg').props())
      .toHaveProperty('viewBox', props.icons[0].view);
    expect(workCard.find('path').props())
      .toHaveProperty('d', props.icons[0].icon);
  });

  it('should display image', function () {
    expect(workCard.find('img').props())
      .toHaveProperty('src', props.img);
  });

  it('should display name', function () {
    expect(workCard.find('.works__name')
      .text()).toBe(props.name);
  });
});