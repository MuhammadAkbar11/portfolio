import React, { useRef } from 'react';
import { Socials } from '@components';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import useAppearOnScroll from '../../hooks/useAppearOnScroll';

const Footer = motion.custom(styled.footer`
  ${tw` mt-12 py-8 `}
`);

const FooterRow = styled.div`
  ${tw`flex flex-col min-md:flex-row justify-between `}
`;

const FooterColumn = styled.div`
  ${tw` flex-1 flex`}
`;

const FooterStartColumn = motion.custom(styled.div`
  ${tw`flex-1 flex justify-start flex-wrap text-primary font-thin font-inconsolata  italic `}
`);

const FooterEndColumn = styled(FooterColumn)`
  ${tw`justify-start max-md:py-6 min-md:justify-end`}
`;

const variants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: 'tween',
      stiffness: 100,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      delay: 0.1,
      duration: 0.3,
      type: 'tween',
      stiffness: 100,
      when: 'afterChildren',
    },
  },
};

const footer = () => {
  const ref = useRef();

  const [visible] = useAppearOnScroll(ref);
  /* eslint-disable */
  return (
    <Footer
      ref={ref}
      variants={variants}
      initial='closed'
      animate={visible ? 'show' : ''}
      exit='exit'
    >
      <FooterRow>
        <FooterStartColumn>
          {'// Designed & Build By Muhammad Akbar 2020'}
        </FooterStartColumn>
        <FooterEndColumn>
          <motion.a
            whileHover={{
              scale: 1.02,
              y: -3,
              transition: {
                duration: 0.3,
                type: 'spring',
              },
            }}
            href='mailto:muhammadakbarletlet11@gmail.com'
            target='_blank'
            className='hover:text-primary text-lg font-inconsolata italic '
          >
            .sayHello
            <span className='text-primary'>()</span>
          </motion.a>
          <div className='mx-3 '>|</div>
          <Socials inView={visible} />
        </FooterEndColumn>
      </FooterRow>
    </Footer>
  );
};

export default footer;
