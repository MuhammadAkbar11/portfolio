import React from 'react';
import { Template, PageTitle, SelectedProjects, Footer } from '@components';
import { StyledSelectedProjectSection } from '@app/styled';
import useTitle from '../hooks/useTitle';
import withTransition from '../hoc/withTransition';

const Works = () => {
  useTitle('Works');

  return (
    <Template>
      <PageTitle
        title={`Some Things I've builds`}
        primaryColor='Things'
        subtitle='works'
      >
        {/* eslint-disable */}
        Some <span className=' text-primary'>Things</span> {"I've"} builds
      </PageTitle>

      <StyledSelectedProjectSection>
        <SelectedProjects />
      </StyledSelectedProjectSection>
      <Footer />
    </Template>
  );
};

export default withTransition(Works);
