import React from 'react';
import {Link} from 'react-router-dom';


export const SkillCard = skill => (
  <Link to={`/skills/${skill.id}`} className="skills__content-card">
    <h4 className="skills__content-name">{skill.name}</h4>
    <div className="skills__content-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={skill.view}>
        <path fill="currentColor" d={skill.icon}/>
      </svg>
    </div>
  </Link>
);


export default SkillCard;