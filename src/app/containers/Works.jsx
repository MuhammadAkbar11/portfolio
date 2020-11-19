import React from 'react';
import { Template, PageTitle, SelectedProjects } from '@components';
import { StyledSelectedProjectSection } from '@app/styled';
import useTitle from '../hooks/useTitle';
import useTitleOverlay from '../hooks/useTitleOverlay';

const Works = () => {
  useTitleOverlay('My Works', true);
  useTitle('Works');

  return (
    <Template>
      <PageTitle title='works'>
        {/* eslint-disable */}
        Some <span className=' text-primary'>Things</span> {"I've"} builds
      </PageTitle>
      <StyledSelectedProjectSection>
        <SelectedProjects />
      </StyledSelectedProjectSection>
    </Template>
  );
};

export default Works;
