import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

// const scHeroName = styled.div

const styledHero = motion.custom(styled.div`
  ${tw`flex flex-col h-full flex-1 w-full justify-start min-md:justify-center `}
  & .hero-name {
    line-height: 80px;
    @media (max-width: 576px) {
      line-height: 65px;
    }
  }
`);

const styledfirstName = motion.custom(styled.h3`
  ${tw`flex uppercase text-lightness-slate -ml-1 pl-0 font-montserrat font-extrabold mb-0  xl:mb-6 `}
  font-size: 8vw;
  @media (max-width: 576px) {
    font-size: 11.5vw;
  }
`);

const styledSecondName = motion.custom(styled.h3`
  ${tw`flex uppercase text-lightness-slate font-montserrat font-extrabold max-md:-mt-4  `}
  font-size: 8vw;
  @media (max-width: 576px) {
    font-size: 11.5vw;
  }
`);

const styledHeroInfo = motion.custom(styled.div`
  ${tw`
  flex flex-col min-lg:flex-row justify-between min-lg:items-center font-poppins
  `}
`);

const styledHeroInfoContents = motion.custom(styled.div`
  ${tw`flex-1 mb-12 `}
`);

export {
  styledHero,
  styledfirstName,
  styledSecondName,
  styledHeroInfo,
  styledHeroInfoContents,
};
