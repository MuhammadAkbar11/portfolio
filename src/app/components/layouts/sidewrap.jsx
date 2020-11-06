import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledSideWrap = styled.aside`
  ${tw`hidden min-md:flex  min-md:flex-no-wrap bg-transparent fixed flex-col justify-between
  top-0 bottom-0 px-3  `}
  width: 10%;
`;

const sidewrap = props => {
  let content = '';
  const { position } = props;

  const rightContent = (
    <div className='relative  h-full w-full flex justify-center  items-end'>
      this Right Contents
    </div>
  );
  const leftContent = <div />;

  if (position === 'right') content = rightContent;
  else content = leftContent;

  return (
    <StyledSideWrap
      className={`${position === 'right' ? 'right-0' : 'left-0'}`}
    >
      {content}
    </StyledSideWrap>
  );
};

sidewrap.defaultProps = {
  position: '',
};

sidewrap.propTypes = {
  position: PropTypes.string.isRequired,
};

export default sidewrap;
