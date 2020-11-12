import React from 'react';
import PropTypes from 'prop-types';
import { CaretRight } from '../icons';

function AboutSkill(props) {
  const { skills } = props;
  /* eslint-disable */

  const skill = skills.map(skillItem => (
    <li key={skillItem + 1} className='h-auto flex items-center '>
      <div className='mr-2 text-primary h-2'>
        <CaretRight />{' '}
      </div>{' '}
      {skillItem}
    </li>
  ));

  return (
    <div>
      <ul className='flex flex-col text-sm  leading-7  '>{skill}</ul>
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
