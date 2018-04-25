import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
import Img from './components/Img';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducer, compose(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/img/certificates/:filename" component={Img}/>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();


