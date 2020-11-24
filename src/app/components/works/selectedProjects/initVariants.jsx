const projectVariant = {
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
};

export { projectVariant };
