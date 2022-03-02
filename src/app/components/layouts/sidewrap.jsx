import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Navigations } from '..';

const StyledSideWrap = styled.aside`
  ${tw`hidden min-md:flex  min-md:flex-no-wrap bg-transparent fixed flex-col justify-between
  top-0 bottom-0 px-3  `}
  width: 10%;
`;

/* eslint-disable */

const defaultProps = {
  position: '',
};

const proptypes = {
  position: PropTypes.string.isRequired,
};

const sidewrap = props => {
  let content = '';
  const { position } = props;

  const rightContent = (
    <div className='relative  h-full w-full flex justify-center  items-center'>
      <Navigations />
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

sidewrap.defaultProps = defaultProps;

sidewrap.propTypes = proptypes;

export default sidewrap;
