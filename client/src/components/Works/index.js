import React from 'react';
import {Switch, Route} from 'react-router-dom';
import WorksPage from './WorksPage';
import WorkDetails from './WorkDetails';


export const Works = () => (
  <Switch>
    <Route path="/works/:id" component={WorkDetails}/>
    <Route path="/works" component={WorksPage}/>
  </Switch>
);


export default Works;