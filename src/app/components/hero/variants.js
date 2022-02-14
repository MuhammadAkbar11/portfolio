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
      delay: 1.2,
      duration: 1,
      type: 'spring',
      stiffness: 69,
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    x: -40,
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

const heroInfoVariant = delay => ({
  show: {
    originY: 0,
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      delay: 0.1 + delay,
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
    y: 50,
  },
});

export { heroVariant, heroInfoVariant, deviderVariant, buttonLinkVariant };
