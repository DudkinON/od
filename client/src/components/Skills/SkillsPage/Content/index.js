import React from 'react';
import { useSelector } from 'react-redux';
import SkillCard from './SkillCard';

const Content = () => {
  const {skills} = useSelector(state => state);

  return (
    <div className="skills__content">
      {skills.map(skill => (
        <SkillCard key={skill.id} {...skill} />
      ))}
    </div>
  );
}

export default Content;
