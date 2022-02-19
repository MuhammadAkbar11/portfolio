const variants = {
  logo: {
    show: {
      opacity: 1,
      y: [0, 0, -500],
      transition: {
        duration: 0.9,
        type: 'spring',
      },
    },
    exit: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0,
        duration: 0.4,
        type: 'spring',
      },
    },
    closed: {
      y: [200, 0],
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.4,
      },
    },
  },
  logoImg: {
    show: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        repeatDelay: 0.1,
      },
    },
  },
  slideOut: {
    closed: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0 0)',
    },
    show: {
      opacity: 1,
      y: [0, 0, -100],
      clipPath: ['inset(0 0 0 0)', 'inset(0 0 0 0)', 'inset(0 0 99% 0)'],
      transition: {
        delay: 0,
        duration: 0.9,
      },
    },
    exit: {
      opacity: 0,
      clipPath: 'inset(0 0 99% 0);',
    },
  },
  slidIn: {
    show: {
      opacity: 0,
      y: -200,
      clipPath: 'circle(7.2% at 49% 0)',
      transition: {
        delay: 0,
        duration: 1.3,
        // ...easeTransition,
      },
    },
    closed: {
      opacity: 0,
      y: 200,
      clipPath: 'circle(100.0% at 50% 20%)',
    },
    exit: {
      opacity: 1,
      y: [100, 0],
      clipPath: ['circle(6.8% at 49% 98%)', 'circle(99.7% at 50% 71%)'],
      transition: {
        delay: 1,
        duration: 0.5,
        // times: [1, 0.5, 1],
        // ...easeTransition,
      },
    },
  },
};

export default variants;
