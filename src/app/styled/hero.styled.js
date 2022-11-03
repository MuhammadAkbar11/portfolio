import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

const styledHero = motion.custom(styled.div`
  ${tw`flex flex-col h-full flex-1 w-full justify-start min-md:justify-center `}
`);

const styledfirstName = motion.custom(styled.h3`
  ${tw`flex text-lightness-slate -ml-1 pl-0 font-montserrat font-bold mb-0`}
  font-size: 8vw;
  @media (max-width: 576px) {
    font-size: 11.5vw;
  }
`);

const styledSecondName = motion.custom(styled.h3`
  ${tw`flex text-lightness-slate font-montserrat font-bold   `}
  font-size: 8vw;
  @media (max-width: 576px) {
    font-size: 11.5vw;
  }
`);

const styledHeroInfo = motion.custom(styled.div`
  ${tw`
  flex flex-col min-lg:flex-row  min-lg:items-center font-poppins
  `}
`);

const styledHeroInfoContents = motion.custom(styled.div`
  ${tw`flex-1  `}
`);

export {
  styledHero,
  styledfirstName,
  styledSecondName,
  styledHeroInfo,
  styledHeroInfoContents,
};
