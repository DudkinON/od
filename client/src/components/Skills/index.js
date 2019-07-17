import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SkillsPage from './SkillsPage';


export const Skills = () => (
  <Routes>
    <Route exaxt to="/" element={SkillsPage}/>
  </Routes>
);

export default Skills;