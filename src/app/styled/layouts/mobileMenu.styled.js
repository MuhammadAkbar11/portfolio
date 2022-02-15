import { motion } from 'framer-motion';

const { default: styled } = require('styled-components');
const { default: tw } = require('twin.macro');

const styledMobileMenu = motion.custom(styled.div`
  ${tw` h-screen bg-secondary min-md:hidden flex flex-col justify-center items-center `}
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 6000;
`);

const styledMobileMenuNav = motion.custom(styled.nav`
  ${tw` w-full my-auto flex flex-1 flex-col justify-center items-center   `}
  height: 85%;
`);

const styledMobileMenuItem = motion.custom(styled.div`
  ${tw`text-5xl my-2 relative  uppercase font-semibold font-poppins text-slate`}
  cursor: pointer;
  & .overlay {
    ${tw`absolute bg-primary left-0 top-0 right-0 w-full  h-full`}

    transform-origin: 0 0;
  }

  ${({ isActive }) => isActive && tw`text-primary`}
`);

const styledMobileMenuFooter = motion.custom(styled.div`
  ${tw` w-full flex justify-center font-inconsolata text-light-slate text-sm min-sm:text-base `}
  height: 15%;
`);

export { styledMobileMenuNav, styledMobileMenuItem, styledMobileMenuFooter };
export default styledMobileMenu;
