import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWorks } from '../../../actions';
import WorksList from './WorksList';

const Works = () => {
  const dispatch = useDispatch();

  // Accessing the state using the useSelector hook
  const {url, header} = useSelector(state => state.config.modules.landing.parts.works);

  useEffect(() => {
    dispatch(getWorks(url));
  }, [dispatch, url]);

  return (
    <section className="works">
      <div className="works__container">
        <div className="works__header">
          <h3 className="works__header--text">{header}</h3>
        </div>
        <WorksList/>
      </div>
    </section>
  );
}

export default Works;
