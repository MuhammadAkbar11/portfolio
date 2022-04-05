import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  isReverse: false,
};

const proptypes = {
  isReverse: PropTypes.bool,
};

const projectsSkeleton = ({ isReverse }) => {
  // console.log();
  return (
    <div
      style={{
        height: 'max-content',
      }}
      className='w-full  animate-pulse  mx-auto mb-16  '
    >
      <div
        style={{
          height: 'max-content',
        }}
        className={`flex flex-col ${
          isReverse ? 'min-lg:flex-row' : 'min-lg:flex-row-reverse'
        } gap-5`}
      >
        <div
          className={` w-full  min-lg:w-1/2  order-2 min-lg:order-1 flex flex-col ${
            isReverse ? 'items-start pr-5 ' : 'items-end pl-5 '
          } justify-start  h-auto py-6  `}
        >
          <div className=' bg-light-secondary  h-8 w-3/4 mb-2 ' />
          <div className=' bg-light-secondary h-8 w-2/6  mb-5 ' />
          <div className=' bg-light-secondary h-4 w-full  mb-2 ' />
          <div className=' bg-light-secondary h-4 w-3/4  mb-5 ' />
          <div className=' bg-light-secondary h-4 w-1/4   mb-5 ' />
          <div className='flex gap-4 '>
            <div className='w-6 bg-light-secondary h-6 rounded-full ' />
            <div className='w-6 bg-light-secondary h-6 rounded-full ' />
          </div>
        </div>
        <div className=' w-full order-1 min-lg:order-2 min-lg:w-1/2  my-auto px-2 '>
          <div className='bg-light-secondary h-56' />
        </div>
      </div>
    </div>
  );
};

projectsSkeleton.defaultProps = defaultProps;

projectsSkeleton.propTypes = proptypes;

export default projectsSkeleton;
