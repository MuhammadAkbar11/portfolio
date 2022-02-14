import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

const styledHero = motion.custom(styled.div`
  ${tw`flex flex-col h-full flex-1 w-full justify-start min-md:justify-center `}
`);

const styledfirstName = motion.custom(styled.h3`
  ${tw`flex text-lightness-slate -ml-1 pl-0 font-montserrat font-bold `}
  font-size: 8.5vw;
`);

const styledSecondName = motion.custom(styled.h3`
  ${tw`flex text-lightness-slate pt-1  font-semibold -mt-5 min-md:-mt-8`}
  font-size: 8.2vw;
`);

const styledHeroInfo = motion.custom(styled.div`
  ${tw`
  flex mt-6 min-md:mt-4 flex-col min-lg:flex-row justify-between min-md:pt-2 font-poppins
  `}
`);

const styledHeroInfoContents = motion.custom(styled.div`
  ${tw`flex-1 `}
`);

export {
  styledHero,
  styledfirstName,
  styledSecondName,
  styledHeroInfo,
  styledHeroInfoContents,
};
