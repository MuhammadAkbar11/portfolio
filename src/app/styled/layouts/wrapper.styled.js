import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

const wrapper = motion.custom(styled.div`
  ${tw` text-slate flex flex-col px-6 pt-1 bg-gradient-to-bl from-light-secondary via-dark-secondary to-dark-secondary `}
  ${isHide => isHide && tw`overflow-hidden`}
  min-height: 100vh;
  background-attachment: fixed;
  padding-top: 50px;

  @media (min-width: 766px) {
    & {
      padding-left: 15%;
      padding-right: 15%;
    }
  }

  @media (min-height: 810px) {
    min-height: 100vh;
  }
  &.blur {
    @media (max-width: 767.98px) {
      min-height: min-content;
      height: 100vh !important;
      overflow: hidden;
    }
  }
`);

export default wrapper;
