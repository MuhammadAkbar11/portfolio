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
  // id: '',
  title: '',
  image: '',
  description: '',
  github: '',
  demo: '',
  tools: [],
  isReverse: false,
};

const proptypes = {
  // id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
  demo: PropTypes.string,
  isReverse: PropTypes.bool,
};

const project = props => {
  const { title, description, tools, isReverse, github, demo, image } = props;
  const ref = useRef();
  const [isVisible] = useAppearOnScroll(ref);

  const {
    projectPreviewVariants,
    projectVariants,
    projectInfoVariants,
    projectActionsVariants,
  } = variants;
  return (
    <OverflowHidden>
      <motion.div
        ref={ref}
        initial='init'
        variants={projectVariants}
        animate={isVisible ? 'animate' : ''}
        exit='exit'
        className='flex flex-col min-lg:justify-between w-full min-lg:flex-row  min-lg:mb-24'
      >
        <ProjectPreview
          img={image}
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
          github={github}
          demo={demo}
        />
      </motion.div>
    </OverflowHidden>
  );
};

project.defaultProps = defaultProps;

project.propTypes = proptypes;

export default project;
