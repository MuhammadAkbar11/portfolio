import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, MainContent } from '@app/styled';

import { SideWrapper, TopBar, TitleOverlay } from '@components';

import { LayoutContext } from '@app/context/context';

const template = props => {
  const context = useContext(LayoutContext);

  const { paddingMain, titleOverlay } = context.layoutStore;

  const { children } = props;

  return (
    <Wrapper>
      <SideWrapper position='left' />
      <TopBar />
      {titleOverlay.isShow && <TitleOverlay text={titleOverlay.title} />}
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
