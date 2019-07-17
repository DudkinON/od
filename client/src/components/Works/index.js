import React from 'react';
import {Routes, Route} from 'react-router-dom';
import WorksPage from './WorksPage';
import WorkDetails from './WorkDetails';

const Works = () => (
  <Routes>
    <Route path="/" element={<WorksPage />} />
    <Route path=":id" element={<WorkDetails />} />
  </Routes>
);

export default Works;
