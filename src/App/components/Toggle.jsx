import React from 'react';
import PropTypes from 'prop-types';

const Toggle = props => {
  const { click } = props;
  return (
    <>
      <button onClick={click} type='button' className='btn btn-outline'>
        Klik
      </button>
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
