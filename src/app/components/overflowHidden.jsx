/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const OverflowHiddenStyled = styled.div`
  ${tw`flex relative inset-0 p-0 m-0 overflow-hidden`}
`;

const overflowHidden = ({ children, ...props }) => {
  const { className } = props;
  delete props.className;

  return (
    <OverflowHiddenStyled className={`${className}`} {...props}>
      {children}
    </OverflowHiddenStyled>
  );
};

overflowHidden.defaultProps = {
  className: '',
};

export default overflowHidden;
