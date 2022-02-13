import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

const styledTopmenu = motion.custom(styled.header`
  ${tw`fixed w-full left-0 px-6 flex justify-between flex-row flex-wrap items-center text-primary min-md:px-0 py-2 min-md:pb-4 min-md:pt-8 `}
  /* box-shadow: 0 .3rem 0.2rem rgba(3, 3, 3, 0.3); */
  height: 80px;
  padding-top: 1.8rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 7000;
`);

export default styledTopmenu;
