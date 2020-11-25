import React, { useEffect, useState } from 'react';
import { Socials } from '@components';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useScrollShow } from '@app/hooks';

const StyledFooter = motion.custom(styled.footer`
  ${tw` mt-12 py-8 `}
`);

const FooterRow = styled.div`
  ${tw`flex flex-col min-md:flex-row justify-between `}
`;

const FooterColumn = styled.div`
  ${tw` flex-1 flex`}
`;

const FooterStartColumn = styled(FooterColumn)`
  ${tw`justify-start  `}
`;

const FooterEndColumn = styled(FooterColumn)`
  ${tw`justify-start max-md:py-6 min-md:justify-end`}
`;

const defaultVariants = {
  init: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 0,
    y: 20,
    transition: {
      delay: 0.15,
      duration: 0.3,
      type: 'tween',
      stiffness: 100,
      when: 'beforeChildren',
    },
  },
};

const footer = () => {
  const [variants, setVariants] = useState(defaultVariants);

  const [refFooter, inView] = useScrollShow();

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      setVariants(prevState => ({
        ...prevState,
        animate: {
          ...prevState.animate,
          opacity: 1,
          y: 0,
        },
      }));
    }

    return () => setVariants(defaultVariants);
  }, [inView]);

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, variants]);

  return (
    <StyledFooter
      ref={refFooter}
      variants={variants}
      initial='init'
      animate={controls}
    >
      <FooterRow>
        <FooterStartColumn>
          Designed & Build By
          <span className='text-primary mx-1'> Muhammad Akbar </span> 2020
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
            href='#/'
            target='_blank'
            className='hover:text-primary text-lg '
          >
            .sayHello()
          </motion.a>
          <div className='mx-3 '>|</div>
          <Socials inView={inView} />
        </FooterEndColumn>
      </FooterRow>
    </StyledFooter>
  );
};

export default footer;
