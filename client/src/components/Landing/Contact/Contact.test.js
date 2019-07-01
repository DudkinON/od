import React from 'react';
import {shallow} from 'enzyme';
import {Contact} from './index';


describe('Contact', () => {

  const props = {
    header: "Contact",
    url: "/contact/data",
    onGetContact: jest.fn()
  };
  const contact = shallow(<Contact {...props}/>);

  it('should render properly', function () {
    expect(contact).toMatchSnapshot();
  });

  it('should call onGetContact with given url', function () {
    expect(props.onGetContact).toHaveBeenCalledWith(props.url);
  });

  it('should contains ContactList component', function () {
    expect(contact.find('Connect(ContactList)').exists()).toBe(true);
  });
});