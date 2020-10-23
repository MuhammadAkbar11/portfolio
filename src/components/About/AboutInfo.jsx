import React from 'react';
import AboutListSkill from './AboutListSkill';

const AboutInfo = () => {
  return (
    <>
      <div className='mt-4 min-md:w-1/2 about-content-paragraph  text-light-slate  '>
        <p className=' leading-8 mt-2  '>
          Hello, My nameis Muhammad Akbar Let-let, a
          <span className='text-underline mx-2'>Front-End</span> Developer from
          Bekasi , Indonesia. i enjoy when combining clean and beautiful code
          with beautiful design.
        </p>
        <p className=' leading-8 mt-4 '>
          My goal is to always build that provide UI Effect, animations and
          creating intuitive dynamic user experiences.
        </p>

        <p className=' leading-8 mt-4 '>
          {/*eslint-disable */}
          now, i live in Bekasi, Vest Jave. I'm currently a student at
          <span className='mx-2 text-underline '>UBSI Jatiwaringin</span>
        </p>
        <p className=' leading-8 mt-4 '>
          {/*eslint-disable */}
          And here are few tecnologies i've been working with recently:
        </p>
        <AboutListSkill />
      </div>
    </>
  );
};

export default AboutInfo;
