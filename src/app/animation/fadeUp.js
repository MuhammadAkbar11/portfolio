const fadeUpVariants = delay => {
  return {
    show: {
      originY: 0,
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        when: 'beforeChildren',
        delay: 0.1 + delay,
        duration: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: 15,
    },
  };
};

export { fadeUpVariants };
