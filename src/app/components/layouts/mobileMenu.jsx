import React from 'react';
import { MobileMenuFooter, MobileMenuNavigation } from '..';
import { StyledMobileMenu } from '../../styled';

const index = () => {
  return (
    <StyledMobileMenu
      initial={{
        clipPath: 'circle(8.6% at 95% 6%)',
      }}
      animate={{
        clipPath: 'circle(133.8% at 95% 6%)',
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <MobileMenuNavigation />
      <MobileMenuFooter />
    </StyledMobileMenu>
  );
};

export default index;
