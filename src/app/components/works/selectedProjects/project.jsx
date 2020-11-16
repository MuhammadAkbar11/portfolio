import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import projectImg from 'assets/img/mending.png';

import { motion } from 'framer-motion';
import ProjectInfo from './projectInfo';
import ProjectPreview from './projectPreview';
import useScrollShow from '../../../hooks/useScrollShow';

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

const variants = delay => {
  return {
    init: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.4,
        type: 'spring',
        when: 'beforeChildren',
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  };
};

const project = props => {
  const { title, description, tools, id, isReverse } = props;

  const [itemDelay, setItemDelay] = useState(0.3);

  useEffect(() => {
    const delay = id / 3;
    setItemDelay(delay);
    setTimeout(() => setItemDelay(0.3), 1000);
    return () => {
      setItemDelay(0.3);
    };
  }, []);

  const [ref, inView] = useScrollShow();

  return (
    <>
      <motion.div
        ref={ref}
        variants={variants(itemDelay)}
        initial='init'
        animate={inView ? 'animate' : 'init'}
        className='flex flex-col min-lg:flex-row mt-8 min-lg:mb-24 '
      >
        <ProjectPreview
          img={projectImg}
          alt={title}
          position={isReverse ? 'left' : 'right'}
        />
        <ProjectInfo
          title={title}
          description={description}
          tools={tools}
          position={isReverse ? 'left' : 'right'}
        />
      </motion.div>
    </>
  );
};

project.defaultProps = defaultProps;

project.propTypes = proptypes;

export default project;
