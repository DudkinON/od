import React from 'react';
import {shallow} from 'enzyme';
import {ContactList} from './ContactList';


describe('ContactList', () => {

  const props = {
    contact: [
      {id: "1"},
      {id: "2"},
      {id: "3"},
      {id: "4"}
    ]
  };
  const contactList = shallow(<ContactList {...props}/>);

  it('should render properly', function () {
    expect(contactList).toMatchSnapshot();
  });

  it('should contains ContactCard component', function () {
    expect(contactList.find('ContactCard').length)
      .toBe(props.contact.length);
  });
});