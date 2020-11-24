module.exports = {
  projectDefaultVariants: {
    init: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 0,
      y: 30,
      transition: {
        delay: 0.1,
        duration: 0.4,
        type: 'spring',
        when: 'beforeChildren',
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  },
  projectPreviewVariants: {
    overlay: {
      init: {
        scaleX: 0,
      },
      animate: {
        scaleX: 0,
        transition: {
          delay: 0.3,
          type: 'spring',
          duration: 0.3,
        },
      },
    },

    img: {
      init: {
        scale: 1,
      },
      animate: {
        scale: 1.2,
        transition: {
          type: 'tween',
          duration: 0.3,
        },
      },
      hover: {
        scale: 1,
        transition: {
          type: 'tween',
          duration: 0.3,
        },
      },
    },

    imgWrapper: {
      init: {
        opacity: 0,
        y: 25,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          when: 'beforeChildren',
          type: 'spring',
          stiffnes: 100,
          duration: 0.6,
        },
      },
    },
  },
  projectInfoVariants: {
    init: {
      opacity: 0,
      y: 15,
    },
    animate: {
      opacity: 0,
      y: 15,
      transition: {
        delay: 0.6,
        type: 'spring',
        duration: 0.6,
      },
    },
  },
  projectActionsVariants: {
    hover: {
      scale: 1.09,
      y: -3,
      transition: {
        type: 'spring',
      },
    },
  },
};
