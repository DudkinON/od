import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Content from './Content';
import { getSkills } from '../../../actions';

const SkillsPage = () => {
  const dispatch = useDispatch();

  const skills = useSelector(state => state.skills);
  const {url} = useSelector(state => state.config.modules.skills);

  useEffect(() => {
    if (skills.length === 0) dispatch(getSkills(url));
  }, [dispatch, skills, url]);

  return (
    <div className="skills-page">
      <Content />
    </div>
  );
};

export default SkillsPage;