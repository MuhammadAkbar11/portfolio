import React from 'react';
import PropTypes from 'prop-types';
import SelecPro from './SelecPro';

const SelecProList = props => {
  const { projectlist } = props;

  const list = projectlist.map((project, index) => {
    return (
      <SelecPro
        key={project.id}
        title={project.title}
        desc={project.desc}
        position={index % 2 === 0 ? 'right' : 'left'}
        tools={project.tools}
      />
    );
  });

  return <div className='selecpro'>{list}</div>;
};

SelecProList.defaultProps = {
  projectlist: [],
};
SelecProList.propTypes = {
  projectlist: PropTypes.arrayOf(PropTypes.object),
};

export default SelecProList;
