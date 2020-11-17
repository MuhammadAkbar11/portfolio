import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

const styledNavigations = motion.custom(styled.nav`
  ${tw`flex flex-1   flex-no-wrap mx-auto mr-10 `}
  transform: rotate(90deg);
  width: 150vw;
`);
export default styledNavigations;
