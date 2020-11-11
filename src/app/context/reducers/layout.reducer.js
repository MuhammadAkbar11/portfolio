/* eslint-disable */
const LayoutReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
    // return toggleSidebar(state);
    case 'SHOW_TITLEOVERLAY':
      return {
        ...state,
        titleOverlay: {
          isShow: true,
          title: action.value,
        },
      };
    case 'HIDE_TITLEOVERLAY':
      return {
        ...state,
        titleOverlay: {
          isShow: false,
          title: action.value,
        },
      };
    default:
      return state;
  }
};

export default LayoutReducer;
