/* eslint-disable */
const PublicReducer = (state, action) => {
  const actionTypes = {
    PROJECT_LIST_REQ: (state, action) => {
      return {
        ...state,
        project: {
          loading: true,
          projectList: [],
          error: null,
        },
      };
    },
    PROJECT_LIST_SUCCESS: (state, action) => {
      return {
        ...state,
        project: {
          loading: false,
          projectList: action.payload,
          error: null,
        },
      };
    },
    PROJECT_LIST_ERROR: (state, action) => {
      return {
        ...state,
        project: {
          loading: false,
          projectList: [],
          error: action.payload,
        },
      };
    },

    DEFAULT: state => state,
  };

  return (actionTypes[action.type] || actionTypes['DEFAULT'])(state, action);
};

export default PublicReducer;
