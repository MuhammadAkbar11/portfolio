import { toggleMobileMenu } from '../reducers-actions/layout/mobileMenu';

const LayoutReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MOBILE_MENU':
      return toggleMobileMenu(state, action.payload.value);
    default:
      return state;
  }
};

export default LayoutReducer;
