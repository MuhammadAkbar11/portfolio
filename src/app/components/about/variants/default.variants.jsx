module.exports = {
  coloumVariants: {
    init: {
      opacity: 0,
      y: '1rem',
    },
    animate: {
      opacity: 0,
      y: '1rem',
      transition: {
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
        scaleX: 1,
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
        scale: 1,
        transition: {
          delay: 0.8,
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
      opacity: 0,
      y: '1rem',
    },
  },
  moreInfo: {
    init: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        type: 'spring',
        duration: 0.5,
        when: 'beforeChildren',
      },
    },
  },
};
