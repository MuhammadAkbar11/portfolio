import React from 'react';
import { ButtonLink } from '..';
import { fadeUpVariants } from '../../animation/fadeUp';
import {
  StyledHero,
  FirstName,
  Devider,
  CenterName,
  HeroInfo,
  HeroInfoContents,
} from './styled-hero';
import { heroVariant, deviderVariant, buttonLinkVariant } from './variants';

const hero = () => {
  return (
    <StyledHero variants={heroVariant} initial='closed' animate='show'>
      <FirstName variants={fadeUpVariants(0.6)}>
        Muha<span className='text-primary'>mm</span>ad
      </FirstName>
      <Devider variants={deviderVariant} />
      <CenterName variants={fadeUpVariants(0.7)}> Akbar</CenterName>
      <HeroInfo>
        <HeroInfoContents
          variants={buttonLinkVariant}
          className='order-2 mt-5 flex items-center min-lg:order-1'
        >
          {/* eslint-disable-line */}
          <ButtonLink>Say Hello</ButtonLink>
        </HeroInfoContents>
        <HeroInfoContents
          variants={fadeUpVariants(0.8)}
          className='order-1 min-lg:order-2 min-lg:pr-5 min-lg:text-xl'
        >
          <p>
            Hi There, My name is Muhammad Akbar let-let, I’m a front-end
            Developer from Bekasi, Indonesia
          </p>
        </HeroInfoContents>
      </HeroInfo>
    </StyledHero>
  );
};

export default hero;
