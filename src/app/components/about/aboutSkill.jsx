import React from 'react';
import PropTypes from 'prop-types';

function AboutSkill(props) {
  const { skills } = props;
  /* eslint-disable */

  const skill = skills.map((sk, idx) => {
    const key = idx;
    return (
      <li key={key} className=' pr-2 h-auto w-4/12 block float-left   '>
        <div className='flex items-center text-base italic'>
          <span className='mr-1 text-primary text-opacity-75  '>#</span>
          {sk}
        </div>
      </li>
    );
  });

  return (
    <div className=' w-full '>
      <ul className=' text-sm leading-8 xs:flex xs:flex-col md:block  '>
        {skill}
      </ul>
    </div>
  );
}

AboutSkill.defaultProps = {
  skills: [],
};

AboutSkill.propTypes = {
  skills: PropTypes.array,
};

export default AboutSkill;
