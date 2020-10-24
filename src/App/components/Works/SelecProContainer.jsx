import React from 'react';
import PropTypes from 'prop-types';
import SelecProList from './SelecProList';

const SelecProContainer = props => {
  const { projects } = props;
  return (
    <div className='project-container h-full  flex flex-col mt-12 '>
      <SelecProList projectlist={projects} />
    </div>
  );
};

SelecProContainer.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

SelecProContainer.defaultProps = {
  projects: [],
};

export default SelecProContainer;
