import React, { useContext } from 'react';
import { PublicContext } from '@app/context/context';
import AboutSkill from './aboutSkill';

function AboutListSkill() {
  const {
    publicStore: { skills },
  } = useContext(PublicContext);
  return (
    <div className='mt-2 pt-2 text-slate  '>
      <AboutSkill skills={skills} />
    </div>
  );
}

export default AboutListSkill;
