export const toggleSidebar = state => {
  /* eslint-disable */
  const toggle = state.isOpenSideMenu === false ? true : false;
  return {
    ...state,
    isOpenSideBar: toggle,
  };
};
