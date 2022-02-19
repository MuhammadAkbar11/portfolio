/* eslint-disable */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import projectImg from 'assets/img/mending.png';
import { motion } from 'framer-motion';
import ProjectInfo from './projectInfo';
import ProjectPreview from './projectPreview';

import { OverflowHidden } from '../..';
import variants from './variants';
import useAppearOnScroll from '@app/hooks/useAppearOnScroll';

const defaultProps = {
  id: '',
  title: '',
  description: '',
  tools: [],
  isReverse: false,
};

const proptypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.string),
  isReverse: PropTypes.bool,
};

const project = props => {
  const { title, description, tools, id, isReverse } = props;
  const ref = useRef();
  const [isVisible] = useAppearOnScroll(ref);

  const {
    projectPreviewVariants,
    projectVariants,
    projectInfoVariants,
    projectActionsVariants,
  } = variants;
  return (
    <OverflowHidden className=''>
      <motion.div
        ref={ref}
        initial='init'
        variants={projectVariants}
        animate={isVisible ? 'animate' : ''}
        exit='exit'
        className='flex flex-col min-lg:flex-row  min-lg:mb-24'
      >
        <ProjectPreview
          img={projectImg}
          alt={title}
          variants={projectPreviewVariants}
          position={isReverse ? 'left' : 'right'}
        />
        <ProjectInfo
          title={title}
          description={description}
          tools={tools}
          variants={projectInfoVariants}
          actionVariants={projectActionsVariants}
          position={isReverse ? 'left' : 'right'}
        />
      </motion.div>
    </OverflowHidden>
  );
};

project.defaultProps = defaultProps;

project.propTypes = proptypes;

export default project;
