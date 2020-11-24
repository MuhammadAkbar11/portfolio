const setAnimateProject = (state, delay) => {
  return {
    ...state,
    animate: {
      ...state.animate,
      y: 0,
      opacity: 1,

      transition: {
        ...state.animate.transition,
        delay,
      },
    },
  };
};

const setAnimatePreview = state => {
  const { overlay } = state; // eslint-disable-line
  const newOverlay = {
    ...overlay,
    animate: {
      ...overlay.animate,
      scaleX: 1,
    },
  };

  return { ...state, overlay: newOverlay };
};

const setAnimateInfomation = state => {
  return {
    ...state,
    animate: {
      ...state.animate,
      opacity: 1,
      y: 0,
      transition: {
        ...state.animate.transition,
        delay: 0.9,
        stiffnes: 100,
      },
    },
  };
};

export { setAnimateProject, setAnimatePreview, setAnimateInfomation };
