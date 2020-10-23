import React, { useState } from 'react';
import AboutSkill from './AboutSkills';

const dataSkills = {
  skills1: ['Html', 'Css & Scss', 'Javascript'],
  skills2: ['ReactJs', 'TaildwindCss', 'Bootstrap 4'],
  skills3: ['GIT', 'Webpack', 'Figma'],
};

function AboutListSkill() {
  const [skills] = useState(dataSkills);
  return (
    <div className='mt-4 pt-4 text-slate grid grid-cols-2 min-lg:grid-cols-3 '>
      <AboutSkill skills={skills.skills1} />
      <AboutSkill skills={skills.skills2} />
      <AboutSkill skills={skills.skills3} />
    </div>
  );
}

export default AboutListSkill;
