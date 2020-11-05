import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const SubTitleStyled = styled.div`
  ${tw` text-gray-800 text-xl `}
`;

const SubTitle = props => {
  const { children, tag } = props;
  return <SubTitleStyled as={tag}>{children}</SubTitleStyled>;
};

SubTitle.defaultProps = {
  children: null,
  tag: 'p',
};

SubTitle.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.elementType,
};

export default SubTitle;
