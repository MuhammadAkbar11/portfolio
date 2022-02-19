export const toggleMobileMenu = (state, value) => ({
  ...state,
  mobileMenu: value,
});

export const toggleLoader = (state, value) => ({
  ...state,
  loader: value,
});

export const pageNotRefresh = state => ({
  ...state,
  isReload: false,
});
