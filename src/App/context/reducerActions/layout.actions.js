export const toggleSidebar = state => {
  /* eslint-disable */
  const toggle = state.isOpenSideMenu === false ? true : false;
  return {
    ...state,
    isOpenSideMenu: toggle
  };
};

export const handleTextOverlay = state => {
  console.log(state);
};
