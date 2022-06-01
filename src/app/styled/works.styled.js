import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const styledSelectedProjectSection = motion.custom(styled.section`
  ${tw`h-full  flex flex-col `}
  margin-top: 2.5rem;
  @media (min-width: 576px) {
    margin-top: 6rem;
  }
`);
