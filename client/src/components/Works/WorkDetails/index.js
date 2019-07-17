import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DisplayWork from './DisplayWork';
import { getWork } from '../../../actions';

const WorkDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = useSelector(state => state.config.modules.works.workUrl);
  const work = useSelector(state => state.work);
  const links = useSelector(state => state.config.icons);

  useEffect(() => {
    dispatch(getWork(`${url}/${id}`));
  }, [dispatch, url, id]);

  const showWork = Object.keys(work).length > 0;

  return (
    <div className="work-details">
      {showWork && <DisplayWork {...work} links={links}/>}
      {!showWork && (
        <div className="work-details__error">
          <h1>Cannot connect to the server</h1>
          <p>Check your internet connection and try again</p>
        </div>
      )}
    </div>
  );
};

export default WorkDetails;
