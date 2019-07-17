import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WorksList from './WorksList';
import { getWorks } from '../../../actions';

const WorksPage = () => {
  const dispatch = useDispatch();
  const {url} = useSelector(state => state.config.modules.works);

  useEffect(() => {
    dispatch(getWorks(url));
  }, [dispatch, url]);

  return (
    <div className="works-page">
      <WorksList/>
    </div>
  );
};

export default WorksPage;
