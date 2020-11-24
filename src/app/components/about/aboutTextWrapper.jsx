import React, { useEffect, useState } from 'react';
import { StyledAboutTextWrapper } from '@app/styled';
import { ExternalLink } from '@components';
import { useAnimation } from 'framer-motion';
import Paragraph from './paragraph';
import AboutListSkill from './aboutListSkills';
import { useScrollShow } from '../../hooks';
import { texts } from './variants/default.variants';
import { setAnimateTexts } from './variants/actions.variant';

const aboutInfo = () => {
  const [ref, inView] = useScrollShow();

  const [variants, setVariants] = useState({ ...texts });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      setVariants(setAnimateTexts);
    }

    return () => {
      setAnimateTexts(texts);
    };
  }, [inView]);

  useEffect(() => {
    if (inView) controls.start('animate');
  }, [variants]);

  return (
    <StyledAboutTextWrapper
      variants={variants}
      initial='init'
      animate={controls}
      ref={ref}
    >
      <Paragraph>
        {/* eslint-disable */}
        <span className='text-lg'>Hello..</span>. <br /> I'm Muhammad Akbar
        Let-let, a <span className='text-primary '>Front-End </span>
        Developer.
      </Paragraph>
      <Paragraph>
        A person who enjoys building and designing beautiful websites. and
        specializes in creating animations, UI effects, and interactive layouts
      </Paragraph>
      <Paragraph>
        Computers and technology were alaways a passion for me, but i found my
        self in web development.
      </Paragraph>
      <Paragraph>
        i grew up in <span className='text-primary '>Southest Maluku</span>, but
        now i live in <span className='text-primary '>Bekasi</span>, Vest Java.
        I'm currently a student at{' '}
        <span className='text-primary'>
          <ExternalLink href='http://www.bsi.ac.id'>
            UBSI Jatiwaringin
          </ExternalLink>
        </span>
      </Paragraph>
      <Paragraph>
        And here are few tecnologies i've been working with recently:
      </Paragraph>
      <AboutListSkill />
    </StyledAboutTextWrapper>
  );
};

export default aboutInfo;
