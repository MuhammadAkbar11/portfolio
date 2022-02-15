import React from 'react';
import { Template, PageTitle, SelectedProjects, Footer } from '@components';
import { StyledSelectedProjectSection } from '@app/styled';
import useTitle from '../hooks/useTitle';
import withTransition from '../hoc/withTransition';
import { easeTransition } from '../animation/transtions';

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

      <StyledSelectedProjectSection
        exit={{ y: 100, opacity: 0 }}
        transition={{ ...easeTransition, duration: 0.5 }}
      >
        <SelectedProjects />
      </StyledSelectedProjectSection>
      <Footer />
    </Template>
  );
};

export default withTransition(Works);
