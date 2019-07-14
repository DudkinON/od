import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import SkillsPage from './SkillsPage';


export class Skills extends Component {
  render() {
    return (
      <Switch>
        <Route exaxt to="/" component={SkillsPage}/>
      </Switch>
    );
  }
}

export default Skills;