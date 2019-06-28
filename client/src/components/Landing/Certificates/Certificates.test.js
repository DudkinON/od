import React from 'react';
import {shallow} from 'enzyme';
import {Certificates} from './index';


describe('Certificates', () => {

  const props = {
    header: "Test header",
    url: '/test/url/to/certificates',
    onGetCertificates: jest.fn()
  };

  const certificates = shallow(<Certificates {...props}/>);

  it('should render properly', function () {
    expect(certificates).toMatchSnapshot();
  });

  it('should display passed header', function () {
    expect(certificates.find('.certificates__header').text()).toBe(props.header)
  });

  it('should call onGetCertificates with passed url', function () {
    expect(props.onGetCertificates).toHaveBeenCalledWith(props.url);
  });

  it('should contains CertificateList component', function () {
    expect(certificates.find('Connect(CertificateList)').exists()).toBe(true);
  });
});