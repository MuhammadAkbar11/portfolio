import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const styledAboutSection = motion.custom(styled.section`
  ${tw` flex flex-col min-sm:mt-20 min-lg:flex-row flex-wrap pb-5 min-md:pb-10  `}
`);

const styledAboutCol = styled.section`
  ${tw` min-lg:w-1/2 flex flex-col pb-10`}
`;

export const styledAboutTextWrapper = motion.custom(styled(styledAboutCol)`
  ${tw` text-light-slate order-1 min-lg:order-2 `}
`);

export const styledAboutProfPictWrapper = motion.custom(styled(styledAboutCol)`
  ${tw` min-lg:pt-8 justify-center min-lg:justify-start items-start order-2 min-lg:order-1 `}
`);
