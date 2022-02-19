import { easeTransition } from '../../animation/transtions';

const variants = {
  coloumVariants: {
    init: {
      opacity: 0,
      y: '1rem',
    },
    animate: {
      opacity: 1,
      y: '0rem',
      transition: {
        delay: 1,
        type: 'spring',
        duration: 0.5,
        when: 'beforeChildren',
      },
    },
  },
  media: {
    overlay: {
      init: {
        scaleX: 1,
      },
      animate: {
        scaleX: 0,
        transition: {
          delay: 0.3,
          type: 'spring',
          duration: 0.5,
        },
      },
    },
    img: {
      init: {
        scale: 1,
      },
      animate: {
        scale: 1.3,
        transition: {
          delay: 0.5,
          type: 'spring',
          duration: 0.6,
        },
      },
      hover: {
        scale: 1.2,
        rotate: -5,
        transition: {
          type: 'tween',
          duration: 0.3,
        },
      },
    },
  },
  texts: {
    init: {
      opacity: 0,
      y: '1rem',
    },
    animate: {
      y: '0rem',
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.6,
        type: 'spring',
        when: 'beforeChildren',
      },
    },
  },
  moreInfo: delay => ({
    init: {
      opacity: 0,
      y: 20,
    },
    animate: {
      y: '0rem',
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        type: 'spring',
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 1,
        ...easeTransition,
      },
    },
  }),
};
export default variants;
