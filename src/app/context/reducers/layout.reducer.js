import {
  pageNotRefresh,
  toggleLoader,
  toggleMobileMenu,
} from '../reducers-actions/layout.action';

const LayoutReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MOBILE_MENU':
      return toggleMobileMenu(state, action.payload.value);
    case 'TOGGLE_LOADER':
      return toggleLoader(state, action.payload);
    case 'PAGE_NOT_REFRESH':
      return pageNotRefresh(state);
    default:
      return state;
  }
};

export default LayoutReducer;
