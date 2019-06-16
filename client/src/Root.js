import React from 'react';
import {Provider} from 'react-redux';
import {store} from "./loader";


export default Children => <Provider store={store}><Children /></Provider>;
