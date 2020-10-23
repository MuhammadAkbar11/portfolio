import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../../components/layouts/Footer';
import PageTitle from '../../../components/layouts/PageTitle';

import SelecProContainer from '../../../components/Works/SelecProContainer';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nulla magni odit non architecto, dicta optio inventore
    labore natus tenetur sapiente nesciunt quos repudiandae
    culpa ipsum facilis officiis eveniet, exercitationem
    blanditiis?`,
    tools: ['react', 'taildwind', 'firebase'],
  },
  {
    id: 2,
    title: 'Project 2',
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nulla magni odit non architecto, dicta optio inventore
    labore natus tenetur sapiente nesciunt quos repudiandae
    culpa ipsum facilis officiis eveniet, exercitationem
    blanditiis?`,
    tools: ['reactJs', 'next.js', 'firebase'],
  },
  {
    id: 3,
    title: 'Project 3',
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nulla magni odit non architecto, dicta optio inventore
    labore natus tenetur sapiente nesciunt quos repudiandae
    culpa ipsum facilis officiis eveniet, exercitationem
    blanditiis?`,
    tools: ['Bootsrap 4', 'Css'],
  },
];

const Works = props => {
  const [projects] = useState(projectsData);

  const { handleIsTextOverlay, handleTextOverlay } = props;

  useEffect(() => {
    handleIsTextOverlay(true);
    handleTextOverlay('My Works');
    document.title = 'Muhammad Akbar | My Works';
  }, []);

  return (
    <>
      <PageTitle title='03. My Works'>
        {/* eslint-disable */}
        Some <span className=' text-primary'>Things</span> {"I've"} builds
      </PageTitle>
      <SelecProContainer projects={projects} />
      <Footer />
    </>
  );
};

Works.defaultProps = {
  handleIsTextOverlay: null,
  handleTextOverlay: null,
};

Works.propTypes = {
  handleIsTextOverlay: PropTypes.func,
  handleTextOverlay: PropTypes.func,
};

export default Works;
