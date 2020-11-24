/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import projectImg from 'assets/img/mending.png';

import { motion, useAnimation } from 'framer-motion';
import ProjectInfo from './projectInfo';
import ProjectPreview from './projectPreview';
import useScrollShow from '../../../hooks/useScrollShow';
import { useIsWindowScrolling } from '../../../hooks';

import {
  projectDefaultVariants,
  projectPreviewVariants,
  projectInfoVariants,
  projectActionsVariants,
} from './variants/default.variants';
import {
  setAnimatePreview,
  setAnimateProject,
  setAnimateInfomation,
} from './variants/actions.variants';

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
  const { isWinScroll } = useIsWindowScrolling();
  const [ref, inView] = useScrollShow('-10px');
  const controls = useAnimation();

  const [variants, setVariants] = useState({ ...projectDefaultVariants });
  const [previewVariants, setPreviewVariants] = useState({
    ...projectPreviewVariants,
  });
  const [infoVariants, setInfoVariants] = useState({ ...projectInfoVariants });

  useEffect(() => {
    if (inView) {
      const delay = isWinScroll ? 0.1 : id / 2;
      setVariants(prevState => setAnimateProject(prevState, delay));
      setPreviewVariants(prevState => setAnimatePreview(prevState));
      setInfoVariants(prevState => setAnimateInfomation(prevState));
    }

    return () => {
      setVariants({ ...projectDefaultVariants });
      setPreviewVariants({ ...projectPreviewVariants });
      setInfoVariants({ ...projectInfoVariants });
    };
  }, [inView, isWinScroll]);

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [variants, inView, isWinScroll]);

  return (
    <>
      <motion.div
        ref={ref}
        initial='init'
        variants={variants}
        animate={controls}
        className='flex flex-col min-lg:flex-row mt-8 min-lg:mb-24 '
      >
        <ProjectPreview
          img={projectImg}
          alt={title}
          variants={previewVariants}
          position={isReverse ? 'left' : 'right'}
        />
        <ProjectInfo
          title={title}
          description={description}
          tools={tools}
          variants={infoVariants}
          actionVariants={projectActionsVariants}
          position={isReverse ? 'left' : 'right'}
        />
      </motion.div>
    </>
  );
};

project.defaultProps = defaultProps;

project.propTypes = proptypes;

export default project;
