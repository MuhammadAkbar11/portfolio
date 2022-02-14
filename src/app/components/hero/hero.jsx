/* eslint-disable */
import React from 'react';
import {
  StyledHero,
  StyledFirstName,
  StyledSecondName,
  StyledHeroInfo,
  StyledHeroInfoContents,
} from '@app/styled';
import { AnimatedLetters, ButtonLink, OverflowHidden } from '..';
import { heroVariant, buttonLinkVariant, heroInfoVariant } from './variants';

const hero = () => {
  return (
    <StyledHero variants={heroVariant} initial='closed' animate='show'>
      {/* <div className=' overflow-hidden border h-auto '> */}
      <OverflowHidden>
        <AnimatedLetters
          comp={StyledFirstName}
          delay={0.1}
          title='Muhammad'
          primaryTitles='m,m'
        />
      </OverflowHidden>
      <OverflowHidden>
        <AnimatedLetters comp={StyledSecondName} delay={0.5} title='Akbar' />
      </OverflowHidden>
      <StyledHeroInfo className=' overflow-hidden'>
        <StyledHeroInfoContents
          variants={buttonLinkVariant}
          className='order-2 mt-5 flex items-center min-lg:order-1'
        >
          {/* eslint-disable-line */}
          <ButtonLink>sayHello</ButtonLink>
        </StyledHeroInfoContents>
        <StyledHeroInfoContents
          variants={heroInfoVariant(0.8)}
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
