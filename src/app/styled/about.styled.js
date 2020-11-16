import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const styledAboutSection = motion.custom(styled.section`
  ${tw` flex flex-col min-sm:mt-20 min-md:flex-row flex-wrap pb-5 min-md:pb-10  `}
`);

const styledAboutCol = styled.section`
  ${tw` min-md:w-1/2 flex flex-col pb-10`}
`;

export const styledAboutTextWrapper = motion.custom(styled(styledAboutCol)`
  ${tw` text-light-slate `}
`);

export const styledAboutProfPictWrapper = motion.custom(styled(styledAboutCol)`
  ${tw`p-4 pt-8 justify-start items-start `}
`);
