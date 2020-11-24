const setAnimatePPWrapp = state => {
  return {
    ...state,
    animate: {
      ...state.animate,
      opacity: 1,
      y: '0rem',
      transition: {
        delay: 1,
        type: 'spring',
        duration: 0.5,
        when: 'beforeChildren',
      },
    },
  };
};

const setAnimateOverlay = state => {
  return {
    ...state,
    animate: {
      scaleX: 0,
      transition: {
        delay: 0.3,
        type: 'spring',
        duration: 0.5,
      },
    },
  };
};

const setAnimateImage = state => ({
  ...state,
  animate: {
    scale: 1.3,
    transition: {
      delay: 0.5,
      type: 'spring',
      duration: 0.6,
    },
  },
});

const setAnimateTexts = state => {
  return {
    ...state,
    animate: {
      y: '0rem',
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.6,
        type: 'spring',
        when: 'beforeChildren',
      },
    },
  };
};

const setAnimateMoreInfo = (state, delay) => {
  return {
    ...state,
    animate: {
      y: '0rem',
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        type: 'spring',
        when: 'beforeChildren',
      },
    },
  };
};

export {
  setAnimatePPWrapp,
  setAnimateOverlay,
  setAnimateImage,
  setAnimateTexts,
  setAnimateMoreInfo,
};
