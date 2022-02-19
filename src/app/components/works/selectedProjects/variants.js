const variants = {
  projectVariants: {
    init: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: 'spring',
        when: 'beforeChildren',
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
    exit: {
      opacity: 0,

      transition: {
        // delay: 0.5,
        when: 'afterChildren',
        duration: 0.5,
      },
    },
  },
  projectPreviewVariants: {
    overlay: {
      init: {
        scaleX: 0,
      },
      animate: {
        scaleX: 1,
        transition: {
          delay: 0.8,
          type: 'spring',
          duration: 0.3,
        },
      },
      exit: {
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
      exit: {
        opacity: 0,
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
          delay: 0.3,
          when: 'beforeChildren',
          type: 'spring',
          stiffnes: 100,
          duration: 0.6,
        },
      },
      exit: {
        opacity: 0,
        y: 400,
        transition: {
          when: 'beforeChildren',
          type: 'spring',
          stiffnes: 100,
          duration: 0.3,
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
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        type: 'spring',
        duration: 0.6,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.5,
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

export default variants;
