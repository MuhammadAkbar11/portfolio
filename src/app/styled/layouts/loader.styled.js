import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

const styledLoader = motion.custom(styled.div`
  ${tw` fixed left-0 right-0 top-0 bottom-0  bg-gradient-to-bl from-light-secondary via-dark-secondary to-dark-secondary   `}

  height: 100vh;
  overflow: hidden;
  width: 100%;
  z-index: 999999;
  transform-origin: 0 0;

  & .loader-content {
    ${tw`  h-full flex justify-center items-center  `}
    background-color: #030b17;
    &.hide {
      animation: exit 0.3s ease-out forwards;
    }
    @keyframes exit {
      0% {
        /* scale: 1.05; */
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
      100% {
        /* scale: 20;
        opacity: 0; */
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
      }
    }
  }
`);

export default styledLoader;
