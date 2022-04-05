/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ProjectSkeletonAction,
  ProjectSkeletonCard,
  ProjectSkeletonCardContent,
  ProjectSkeletonImage,
  ProjectSkeletonImagePreview,
  ProjectSkeletonItem,
  ProjectSkeletonWrapper,
} from './projectSkeleton.styled';

const defaultProps = {
  isReverse: false,
};

const proptypes = {
  isReverse: PropTypes.bool,
};

const projectsSkeleton = ({ isReverse }) => {
  return (
    <ProjectSkeletonWrapper>
      <ProjectSkeletonCard isReverse={isReverse}>
        <ProjectSkeletonCardContent isReverse={isReverse}>
          <ProjectSkeletonItem className='h-8 w-3/4 mb-2 ' />
          <ProjectSkeletonItem className='h-8 w-2/6  mb-5 ' />
          <ProjectSkeletonItem className='h-4 w-full  mb-2 ' />
          <ProjectSkeletonItem className='h-4 w-3/4  mb-5 ' />
          <ProjectSkeletonItem className='h-4 w-1/4   mb-5 ' />
          <div className='flex gap-4 '>
            <ProjectSkeletonAction />
            <ProjectSkeletonAction />
          </div>
        </ProjectSkeletonCardContent>
        <ProjectSkeletonImagePreview>
          <ProjectSkeletonImage />
        </ProjectSkeletonImagePreview>
      </ProjectSkeletonCard>
    </ProjectSkeletonWrapper>
  );
};

projectsSkeleton.defaultProps = defaultProps;

projectsSkeleton.propTypes = proptypes;

export default projectsSkeleton;
