import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as types from './types';
import moxios from 'moxios';


describe('actions', () => {
  let url, action, expectedActions, data;
  const createMockStore = configureMockStore([thunk]);
  const mockStore = createMockStore({skills: []});

  afterEach(() => {
    mockStore.clearActions();
  });

  describe('processing actions', () => {
    data = [{id: '2'}, {id: '5'}, {id: '8'}];

    it('should add topSkills to the store', function () {
      expectedActions = [{type: types.SET_TOP_SKILLS, payload: data}];
      mockStore.dispatch(actions.setTopSkills(data));
      expect(mockStore.getActions()).toMatchObject(expectedActions);
    });

  });

  describe('request actions', () => {

    data = [1, 2, 3];

    const setMock = () => {
      moxios.stubRequest(url, {
        status: 200,
        response: data
      });
      mockStore.dispatch(action(url));
    };

    const check = done => moxios.wait(() => {
      expect(mockStore.getActions()).toMatchObject(expectedActions);
      done();
    });

    beforeEach(function () {
      // import and pass your custom axios instance to this method
      moxios.install()
    });

    afterEach(function () {

      // import and pass your custom axios instance to this method
      moxios.uninstall();
      mockStore.clearActions();

      url = '';
      action = null;
      expectedActions = null;
    });

    it('should add skills to the store', function (done) {

      action = actions.getSkills;
      url = '/skills';
      expectedActions = [{type: types.SET_SKILLS, payload: data}];

      setMock();

      return check(done);
    });

    it('should add certificates to the store', function (done) {

      action = actions.getCertificates;
      url = '/certificates';
      expectedActions = [{type: types.SET_CERTIFICATES, payload: data}];

      setMock();

      return check(done);
    });

    it('should add works to the store', function (done) {

      action = actions.getWorks;
      url = '/works';
      expectedActions = [{type: types.SET_WORKS, payload: data}];

      setMock();

      return check(done);
    });

    it('should add contact data to the store', function (done) {
      action = actions.getContact;
      url = '/contact';

      expectedActions = [{type: types.SET_CONTACT, payload: data}];

      setMock();

      return check(done);
    });

    it('should add benefits data to the store', function (done) {
      action = actions.getBenefits;
      url = '/benefits';

      expectedActions = [{type: types.SET_BENEFITS, payload: data}];

      setMock();

      return check(done);
    });

    it('should add interest data to the store', function (done) {
      action = actions.getInterest;
      url = '/interest';

      expectedActions = [{type: types.SET_INTEREST, payload: data}];

      setMock();

      return check(done);
    });

    it('should add interest data to the store', function (done) {
      action = actions.getCategories;
      url = '/categories';

      expectedActions = [{type: types.SET_CATEGORIES, payload: data}];

      setMock();

      return check(done);
    });
  });

  it('should add benefits data to the store', function (done) {
    action = actions.getBenefits;
    url = '/benefits';

    expectedActions = [{type: types.SET_BENEFITS, payload: data}];

    setMock();

    return check(done);
  });

  it('should add interest data to the store', function (done) {
    action = actions.getInterest;
    url = '/interest';

    expectedActions = [{type: types.SET_INTEREST, payload: data}];

    setMock();

    return check(done);
  });
});

