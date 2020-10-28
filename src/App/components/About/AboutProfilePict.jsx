import React from 'react';
import profile from '../../assets/img/profile.jpg';

const AboutProfilePict = () => {
  return (
    <div className='mt-4 p-4 min-md:w-1/2   flex justify-center items-start flex-col   '>
      <div className='profile-picture mx-auto   '>
        <img className='object-cover' src={profile} alt='' />
        <div className='mt-8 text-left'>
          <h6 href='/' className='text-lightness-slate my-auto font-iconsolata'>
            Here is my{' '}
            <a
              href='#/'
              className=' text-blue-500 underline hover:text-primary '
            >
              resume
            </a>
          </h6>
        </div>
      </div>
      <div />
    </div>
  );
};

export default AboutProfilePict;
