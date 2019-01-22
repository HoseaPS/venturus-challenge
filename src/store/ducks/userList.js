export const Types = {
  GET_USER_INFO_REQUEST: 'userList/GET_USER_INFO_REQUEST',
  GET_USER_INFO_SUCCESS: 'userList/GET_USER_INFO_SUCCESS',
  GET_USER_FAILURE: 'userList/GET_USER_FAILURE',
  CLEAR_BASE: 'userList/CLEAR_BASE',
  REMOVE: 'userList/REMOVE',
  ADD_REQUEST: 'newUser/ADD_REQUEST',
};

const INITIAL_STATE = {
  data: [],
  newUsers: [],
  loading: false,
  error: null,
};
export default function userList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USER_INFO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data.concat(state.newUsers),
      };
    }
    case Types.CLEAR_BASE: {
      return {
        ...state,
        data: [],
      };
    }
    case Types.GET_USER_FAILURE: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case Types.ADD_REQUEST: {
      if (state.newUsers !== undefined) {
        return {
          ...state,
          newUsers: [...state.newUsers, action.payload.data],
        };
      }
      return {
        ...state,
        newUsers: action.payload.data,
      };
    }
    case Types.REMOVE: {
      return {
        ...state,
        data: state.data.filter(user => user.user.id !== action.payload.user.user.id),
      };
    }
    default: {
      return state;
    }
  }
}

export const Creators = {
  getUserListRequest: () => ({ type: Types.GET_USER_INFO_REQUEST }),

  getUserListSuccess: data => ({
    type: Types.GET_USER_INFO_SUCCESS,
    payload: { data },
  }),

  removeUser: user => ({
    type: Types.REMOVE,
    payload: { user },
  }),

  clearBase: () => ({ type: Types.CLEAR_BASE }),

  addUserRequest: data => ({
    type: Types.ADD_REQUEST,
    payload: { data },
  }),

  getUserInfoFailure: error => ({
    type: Types.GET_USER_FAILURE,
    payload: { error },
  }),
};
