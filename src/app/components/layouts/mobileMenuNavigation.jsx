import React, { useContext } from 'react';
/* eslint-disable */
import { motion } from 'framer-motion';
import { StyledMobileMenuItem, StyledMobileMenuNav } from '@app/styled';
import { LayoutContext } from '@app/context/context';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const variants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.3,
      type: 'spring',
      when: 'beforeChildren',
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: {
    opacity: [1, 0],
    y: 25,
    transition: {
      duration: 0.4,
      type: 'spring',
      when: 'afterChildren',
      staggerDirection: -1,
      // staggerChildren: 0.2,
      // staggerDirection: -1,
    },
  },
};

const itemVariants = {
  init: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 9,
      stiffness: 150,
    },
  },
  exit: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.3,
      type: 'spring',
    },
  },
  hover: {
    y: -3,
    scale: 1.1,
    textShadow: '-1px 4px 13px #061020',
    color: '#63B3ED',
    transition: {
      duration: 0.3,
      type: 'spring',
    },
  },
};

const itemOverlayVariants = {
  init: {
    opacity: 0,
    scaleY: 1,
    y: 15,
  },
  animate: {
    opacity: 1,
    scaleY: 0,
    y: 0,
    position: 'absolute',
    transition: {
      delay: 0,
      duration: 0.5,
      type: 'tween',
    },
  },
  exit: {
    opacity: 1,
    scaleY: 1,
    y: 15,
    position: 'absolute',
    transition: {
      delay: 0,
      duration: 0.5,
      type: 'tween',
    },
  },
};

const mobileMenuNavigation = props => {
  const lycontext = useContext(LayoutContext);
  const history = useHistory();
  const location = useLocation();
  const { navigations } = lycontext.layoutStore;

  const handleOnlick = (event, url) => {
    event.preventDefault();

    if (url !== location.pathname) {
      lycontext.layoutDispatch({
        type: 'TOGGLE_MOBILE_MENU',
        payload: { value: false },
      });
      props.onActivePath(url);
    }
  };
  return (
    <StyledMobileMenuNav variants={variants}>
      {navigations.map((item, index) => {
        const key = index * 0.1;
        const disabled = item.url === location.pathname;

        return (
          <motion.a
            key={key}
            href={item.url}
            className={`${disabled && 'text-primary'}`}
            onClick={e => handleOnlick(e, item.url)}
          >
            <StyledMobileMenuItem
              variants={itemVariants}
              data-text={item?.menu}
              whileHover='hover'
              whileTap='hover'
              isActive={disabled}
            >
              {`${item?.menu}`}
              <motion.div className='overlay' variants={itemOverlayVariants} />
            </StyledMobileMenuItem>
          </motion.a>
        );
      })}
    </StyledMobileMenuNav>
  );
};

export default mobileMenuNavigation;
