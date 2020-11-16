import React from 'react';
import { Template, PageTitle, SelectedProjects } from '@components';
import { StyledSelectedProjectSection } from '@app/styled';
import useTitle from '../hooks/useTitle';
import useTitleOverlay from '../hooks/useTitleOverlay';

const Works = () => {
  useTitleOverlay('My Works');
  useTitle('My Works');

  return (
    <Template>
      <PageTitle title='02. My Works'>
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
