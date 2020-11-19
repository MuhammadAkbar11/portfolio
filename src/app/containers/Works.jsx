import React from 'react';
import { Template, PageTitle, SelectedProjects } from '@components';
import { StyledSelectedProjectSection } from '@app/styled';
import useTitle from '../hooks/useTitle';

const Works = () => {
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
