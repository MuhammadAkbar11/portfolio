import React from 'react';
import AboutListSkill from './AboutListSkill';

const AboutInfo = () => {
  return (
    <>
      <div className='mt-4 min-md:w-1/2 about-content-paragraph  text-light-slate  '>
        <p className=' leading-8 mt-2  '>
          {/* eslint-disable */}
          <span className='text-lg'>Hello..</span>. <br /> I'm Muhammad Akbar
          Let-let, a <span className='text-underline mx-2'>Front-End</span>{' '}
          Developer.
        </p>

        <p className=' leading-8 mt-4 '>
          i enjoy when build and design beautiful interface websites. and
          specialize in creating animations , UI effect and interacive layouts
        </p>

        <p className=' leading-8 mt-4 '>
          Computers and tecnology were alaways a passion for me, but i found my
          self in web development.
        </p>

        <p className=' leading-8 mt-4 '>
          {/*eslint-disable */}i grew up in southest{' '}
          <span className=' mx-2 text-underline '>Maluku</span>, but now i live
          in <span className=' mx-2 text-underline '>Bekasi</span>, Vest Java.
          I'm currently a student at
          <span className='mx-2 text-underline '>UBSI Jatiwaringin</span>
        </p>
        <p className=' leading-8 mt-4 '>
          {/*eslint-disable */}
          And here are few tecnologies i've been working with recently:
        </p>
        <AboutListSkill />

        <p className=' leading-8 mt-4 '>
          {/*eslint-disable */}
          Thanks for stopping by!
        </p>
      </div>
    </>
  );
};

export default AboutInfo;
