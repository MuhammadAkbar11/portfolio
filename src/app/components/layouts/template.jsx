import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '@app/styled';
import { SideWrapper, TopBar } from '@components';
import { LayoutContext } from '@app/context/context';
import { MainContent } from '../../styled';

const template = props => {
  const context = useContext(LayoutContext);

  const { paddingMain } = context.layoutStore;

  const { children } = props;

  return (
    <Wrapper>
      <SideWrapper position='left' />
      <TopBar />
      <MainContent className={`${paddingMain}   `}>{children}</MainContent>
      <SideWrapper position='right' />
    </Wrapper>
  );
};

Wrapper.defaultProps = {
  children: '',
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default template;
