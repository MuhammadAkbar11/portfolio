import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const TitleStyled = styled.div`
  ${tw` text-gray-700 text-4xl `}
`;

const Title = props => {
  const { children, tag } = props;
  return <TitleStyled as={tag}>{children}</TitleStyled>;
};

Title.defaultProps = {
  children: null,
  tag: 'p',
};

Title.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.elementType,
};

export default Title;
