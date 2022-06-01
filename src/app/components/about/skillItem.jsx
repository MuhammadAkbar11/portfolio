import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  name: '',
  order: 0,
  _id: '',
};

const proptypes = {
  name: PropTypes.string,
  order: PropTypes.number,
  _id: PropTypes.string,
};

const skillItem = props => {
  console.log(props);
  const { name } = props;
  return (
    <li className=' pr-2 h-auto w-4/12 block float-left   '>
      <div className='flex items-center text-base italic whitespace-no-wrap '>
        <span className='mr-1 text-primary text-opacity-75  '>#</span>
        {name}
      </div>
    </li>
  );
};

skillItem.defaultProps = defaultProps;

skillItem.propTypes = proptypes;

export default skillItem;
