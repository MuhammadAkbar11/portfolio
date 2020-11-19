const heroVariant = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
  },
};

const buttonLinkVariant = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.1,
      duration: 0.4,
      type: 'spring',
      stiffness: 200,
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    x: -10,
  },
};

const deviderVariant = {
  show: {
    scaleX: [0, 1],
    transition: {
      delay: 1,
      type: 'spring',
      scaleX: [0.1, 2],
    },
  },
  closed: {
    scaleX: 0,
  },
};

export { heroVariant, deviderVariant, buttonLinkVariant };
