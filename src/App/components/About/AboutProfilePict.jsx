import React from 'react';
import profile from '../../assets/img/profile.jpg';

const AboutProfilePict = () => {
  return (
    <div className='mt-4 p-4 min-md:w-1/2 flex justify-center items-start   '>
      <div className='profile-picture mx-auto   '>
        <img className='object-cover' src={profile} alt='' />
      </div>
    </div>
  );
};

export default AboutProfilePict;
