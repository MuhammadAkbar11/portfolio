const fadeUpVariants = delay => {
  return {
    show: {
      originY: 0,
      opacity: 1,
      y: 0,
      transition: {
        // y: { stiffness: 60 },
        when: 'beforeChildren',
        delay: 0.1 + delay,
        duration: 1,
      },
    },
    closed: {
      opacity: 0,
      y: 60,
    },
    exit: {
      opacity: 0,
      y: 60,
      delay: 0.1 + delay,
    },
  };
};

export { fadeUpVariants };
