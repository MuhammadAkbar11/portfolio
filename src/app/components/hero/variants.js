import { easeTransition } from '../../animation/transtions';

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
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      when: 'afterChildren',
    },
  },
};

const buttonLinkVariant = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
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
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      delay: 0.1,
      duration: 1,
      type: 'spring',
      stiffness: 69,
      when: 'beforeChildren',
    },
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
  exit: {
    opacity: [1, 0],
    y: 50,
    transition: {
      ...easeTransition,
      // when: 'afterChildren',
      delay: 0.3,
      duration: 1,
    },
  },
});

export { heroVariant, heroInfoVariant, deviderVariant, buttonLinkVariant };
