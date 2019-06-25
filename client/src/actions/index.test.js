import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import {SET_SKILLS} from './types';
import moxios from 'moxios';


describe('actions', () => {
  const createMockStore = configureMockStore([thunk]);
  const mockStore = createMockStore({skills: []});
  const data = [1,2,3];

  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install()
  });

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  });

  it('should add action to the store', function (done) {

    moxios.stubRequest('/skills', {
      status: 200,
      response: data
    });
    mockStore.dispatch(actions.getSkills('/skills'));

    moxios.wait(() => {
      const expectedActions = [{type: SET_SKILLS, payload: data}];
      expect(mockStore.getActions()).toMatchObject(expectedActions);
      done();
    })
  });

});

