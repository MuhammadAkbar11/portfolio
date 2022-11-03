/* eslint-disable */
import React from 'react';
import {
  StyledHero,
  StyledFirstName,
  StyledSecondName,
  StyledHeroInfo,
  StyledHeroInfoContents,
} from '@app/styled';
import { AnimatedLetters, ButtonLink, OverflowHidden, Socials } from '..';
import { heroVariant, buttonLinkVariant, heroInfoVariant } from './variants';
import { useAppearOnScroll } from '../../hooks';

const hero = () => {
  const ref = React.useRef();
  const [showSocials, setShowSocials] = React.useState(false);
  const [visibleSocials] = useAppearOnScroll(ref);

  React.useEffect(() => {
    if (visibleSocials) {
      setTimeout(() => {
        setShowSocials(true);
      }, 1500);
    }

    return () => {
      setShowSocials(false);
    };
  }, [visibleSocials]);

  return (
    <>
      <StyledHero
        variants={heroVariant}
        initial='closed'
        animate='show'
        exit='exit'
        className='hero'
      >
        <div className='relative hero-name max-sm:mt-5 min-md:-mt-10 xl:-mt-10 mb-5 min-md:mb-12 leading-10 sm:leading-12 md:leading-11  min-lg:leading-16  '>
          <div className='mb-2 min-lg:mb-6'>
            <OverflowHidden className=''>
              <AnimatedLetters
                comp={StyledFirstName}
                delay={0.1}
                title='Muhammad'
                primaryTitles='m,m'
              />
            </OverflowHidden>
          </div>
          <OverflowHidden className=' '>
            <AnimatedLetters
              comp={StyledSecondName}
              delay={0.5}
              title='Akbar'
            />
          </OverflowHidden>
        </div>
        <StyledHeroInfo className='overflow-hidden'>
          <StyledHeroInfoContents
            variants={buttonLinkVariant}
            className='order-2 mt-5 flex items-center min-lg:order-1'
          >
            {/* eslint-disable-line */}
            <ButtonLink href='mailto:muhammadakbarletlet11@gmail.com'>
              sayHello
            </ButtonLink>
          </StyledHeroInfoContents>
          <StyledHeroInfoContents
            variants={heroInfoVariant(0.8)}
            className='order-1 min-lg:order-2 min-lg:pr-5 min-lg:text-md min-lg:italic min-lg:font-inconsolata  '
          >
            <p>
              Hi There, My name is Muhammad Akbar let-let, I’m a Web Developer
              from Bekasi, Indonesia
            </p>
          </StyledHeroInfoContents>
        </StyledHeroInfo>
        <div
          className='mt-12 min-lg:mt-16 '
          ref={ref}
          style={{
            minHeight: '50px',
          }}
        >
          {showSocials && <Socials inView={showSocials} />}
        </div>
      </StyledHero>
    </>
  );
};

export default hero;
