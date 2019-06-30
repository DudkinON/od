import React from 'react';
import {shallow} from 'enzyme';
import {WorksList} from './WorksList';


describe('WorksList', () => {

  const props = {
    works: [
      {
        "id": "1",
        "name": "name of the work 1",
        "description": "description of the work 1",
        "img": "/path/to/image"
      },
      {
        "id": "2",
        "name": "name of the work 2",
        "description": "description of the work 2",
        "img": "/path/to/image"
      },
      {
        "id": "3",
        "name": "name of the work 3",
        "description": "description of the work 3",
        "img": "/path/to/image"
      },
      {
        "id": "4",
        "name": "name of the work 4",
        "description": "description of the work 4",
        "img": "/path/to/image"
      }
    ]
  };

  const worksList = shallow(<WorksList {...props}/>);

  it('should render properly', function () {
    expect(worksList).toMatchSnapshot();
  });

  it('should render works', function () {
    expect(worksList.find('WorkCard').length)
      .toBe(props.works.length);
  });
});