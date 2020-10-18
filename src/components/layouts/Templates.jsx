import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

const Templates = props => {
  // const [hideFooter, setHideFooter] = useState(false);

  const { children, mainClass } = props;
  return (
    <div className='wrapper'>
      {/* nav */}
      <Nav />
      {/* main Content */}
      <div className={`main ${mainClass}`}>
        <>{children}</>
      </div>
    </div>
  );
};

Templates.defaultProps = {
  children: '',
  mainClass: '',
};

Templates.propTypes = {
  children: PropTypes.node,
  mainClass: PropTypes.string,
};

export default Templates;
