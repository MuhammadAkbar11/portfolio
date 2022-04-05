import React, { useContext, useEffect } from 'react';
import { PublicContext } from '@app/context/context';
import { SelectedProject, ProjectsSkeleton } from '@components';
import { motion } from 'framer-motion';
import axios from 'axios';

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
  const { project: projectState } = context.publicStore;
  const dispatch = context.publicDispatch;

  useEffect(() => {
    const loadProjects = async () => {
      dispatch({
        type: 'PROJECT_LIST_REQ',
      });
      try {
        const loadProjects = await axios.get('/api/projects');

        setTimeout(() => {
          dispatch({
            type: 'PROJECT_LIST_SUCCESS',
            payload: loadProjects.data?.projects,
          });
        }, 666);
      } catch (error) {}
    };

    loadProjects();
  }, []);

  const projectListTransform = projectState?.projectList
    ?.filter(x => x.isSelected === true)
    .map((project, i) => {
      let idx = i;
      return (
        <div className='mb-5' key={project._id}>
          <SelectedProject
            // id={project._id}
            image={project.image}
            title={project.title}
            tools={project.stacks}
            description={project.description}
            isReverse={idx % 2 === 0 ? true : false}
            demo={project.demo}
            github={project.github}
          />
        </div>
      );
    });

  const skeleton = [...Array(5).keys()].map((x, idx) => {
    const key = idx;
    return (
      <ProjectsSkeleton key={key} isReverse={idx % 2 === 0 ? true : false} />
    );
  });

  return (
    <>
      <motion.div variants={listVariants} initial='hidden' animate='show'>
        <div className='text-center'>{projectState?.loading && skeleton}</div>
        {projectListTransform}
      </motion.div>
    </>
  );
};

export default listProjects;
