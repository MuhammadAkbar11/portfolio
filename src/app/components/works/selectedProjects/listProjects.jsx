import React, { useContext, useEffect, useState } from 'react';
import { PublicContext } from '@app/context/context';
import { SelectedProject } from '@components';
import { motion } from 'framer-motion';

const listVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
      when: 'beforeChildren',
    },
  },
};
/* eslint-disable */

const listProjects = () => {
  const context = useContext(PublicContext);
  const { projects } = context.publicStore;
  const [isMount, setMount] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 100);
  }, []);

  const selectedProjects = projects
    .filter(project => project.type === 'best')
    .map(item => {
      return (
        <SelectedProject
          id={item.id}
          key={item.id}
          title={item.title}
          tools={item.tools}
          description={item.desc}
          isReverse={item.id % 2 === 0 ? true : false}
        />
      );
    });

  return (
    <>
      {' '}
      {isMount && (
        <motion.div variants={listVariants} initial='hidden' animate='show'>
          {selectedProjects}
        </motion.div>
      )}{' '}
    </>
  );
};

export default listProjects;
