import React from 'react';
import { useSelector } from 'react-redux';
import WorkCard from './WorkCard';

const WorksList = () => {
  // Accessing the state using the useSelector hook
  const {works, config} = useSelector(state => state);
  console.log(works, config);
  return (
    <div className="works__content">
      {works.map(work => (
        <WorkCard key={work.id} url={config.routes.works} {...work}/>
      ))}
    </div>
  );
}

export default WorksList;
