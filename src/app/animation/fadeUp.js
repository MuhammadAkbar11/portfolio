const fadeUpVariants = delay => {
  return {
    init: {
      opacity: 0,
      y: 15,
    },
    show: {
      originY: 0,
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000 },
        delay,
        duration: 0.2,
      },
    },
  };
};

export { fadeUpVariants };
