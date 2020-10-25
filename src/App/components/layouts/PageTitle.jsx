import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = props => {
  const { title, children } = props;
  /* eslint-disable */
  console.log(title.split(' '));
  return (
    <>
      <div className='w-full flex flex-col flex-wrap min-md:mt-8  '>
        <p className=' z-10 font-iconsolata text-xs min-md:text-lg text-primary  '>
          {title}
        </p>
        <h1 className='z-10 -mt-1 text-3.2xl text-light font-montserrat font-extrabold md:text-5xl lg:text-6xl min-md:whitespace-no-wrap min-xl:text-6.5xl '>
          {children}
        </h1>
      </div>
    </>
  );
};

PageTitle.defaultProps = {
  title: '',
  children: null,
};

PageTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PageTitle;
