import React from 'react';
import PropTypes from 'prop-types';

const PageTitleOverlay = props => {
  const { text, className } = props;
  return (
    <div
      className={`page-title-overlay w-full text-center flex justify-center flex-no-wrap ${className} `}
    >
      <span className='page-title-overlay__text text-light-slate -ml-2  font-black text-center'>
        {text}
      </span>
    </div>
  );
};

PageTitleOverlay.defaultProps = {
  className: '',
  text: '',
};

PageTitleOverlay.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default PageTitleOverlay;
