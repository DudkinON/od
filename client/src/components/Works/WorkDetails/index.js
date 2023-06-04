import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DisplayWork from './DisplayWork';
import {getWorks} from '../../../actions';

const WorkDetails = () => {
  const dispatch = useDispatch();
  const {config, works} = useSelector(state => state);

  useEffect(() => {
    if(!works) dispatch(getWorks(config.urls.works));
  }, [works, dispatch, config]);

  return (
    <div className="work-details">
      <DisplayWork/>
    </div>
  );
};

export default WorkDetails;
