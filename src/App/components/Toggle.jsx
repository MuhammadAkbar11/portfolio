import React from 'react';
import PropTypes from 'prop-types';

const Toggle = props => {
  /* eslint-disable */
  const { click } = props;
  return (
    <>
      <div className='toggle '>
        <div className='toggle-path py-2'></div>
      </div>
    </>
  );
};

Toggle.defaultProps = {
  click: null,
};

Toggle.propTypes = {
  click: PropTypes.func,
};

export default Toggle;
