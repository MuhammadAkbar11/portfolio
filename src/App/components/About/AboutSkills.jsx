import React from 'react';
import PropTypes from 'prop-types';

function AboutSkill(props) {
  const { skills } = props;
  /* eslint-disable */

  const skill = skills.map(skillItem => (
    <li key={skillItem + 1}>
      <span className='mr-1 text-primary '>{'>'} </span> {skillItem}
    </li>
  ));

  return (
    <div>
      <ul className='flex flex-col text-sm  leading-7 '>{skill}</ul>
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
