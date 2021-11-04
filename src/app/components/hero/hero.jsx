import React from 'react';
import {
  StyledHero,
  StyledFirstName,
  StyledDivider,
  StyledSecondName,
  StyledHeroInfo,
  StyledHeroInfoContents,
} from '@app/styled';
import { ButtonLink } from '..';
import { fadeUpVariants } from '../../animation/fadeUp';
import { heroVariant, deviderVariant, buttonLinkVariant } from './variants';

const hero = () => {
  return (
    <StyledHero variants={heroVariant} initial='closed' animate='show'>
      <StyledFirstName variants={fadeUpVariants(0.1)}>
        Muha<span className='text-primary'>mm</span>ad
      </StyledFirstName>
      <StyledDivider variants={deviderVariant} />
      <StyledSecondName variants={fadeUpVariants(0.3)}> Akbar</StyledSecondName>
      <StyledHeroInfo>
        <StyledHeroInfoContents
          variants={buttonLinkVariant}
          className='order-2 mt-5 flex items-center min-lg:order-1'
        >
          {/* eslint-disable-line */}
          <ButtonLink>sayHello</ButtonLink>
        </StyledHeroInfoContents>
        <StyledHeroInfoContents
          variants={fadeUpVariants(0.5)}
          className='order-1 min-lg:order-2 min-lg:pr-5 min-lg:text-xl'
        >
          <p>
            Hi There, My name is Muhammad Akbar let-let, I’m a Web Developer
            from Bekasi, Indonesia
          </p>
        </StyledHeroInfoContents>
      </StyledHeroInfo>
    </StyledHero>
  );
};

export default hero;
