import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

const StyledHero = motion.custom(styled.div`
  ${tw`flex  flex-col h-full flex-1  w-full justify-start min-md:justify-center   `}
`);

const FirstName = motion.custom(styled.h3`
  ${tw`text-lightness-slate  -ml-1 pl-0 font-montserrat font-bold  `}
  font-size: 10vw;
`);

const Devider = motion.custom(styled.hr`
  ${tw`bg-primary ml-0 h-2 min-md:-mt-2 w-10 mt-2  `}
  transform-origin: 0 0;
  @media (min-width: 766px) {
    width: 5rem;
  }
  border: none;
`);

const CenterName = motion.custom(styled.h3`
  ${tw`text-lightness-slate pl-0 font-semibold mt-2  `}
  font-size: 8vw;
`);

const HeroInfo = motion.custom(styled.div`
  ${tw`
  flex mt-6 min-md:mt-4 flex-col min-lg:flex-row justify-between min-md:pt-2 font-poppins
  `}
`);

const HeroInfoContents = motion.custom(styled.div`
  ${tw`flex-1 `}
`);

export {
  StyledHero,
  FirstName,
  Devider,
  CenterName,
  HeroInfo,
  HeroInfoContents,
};
