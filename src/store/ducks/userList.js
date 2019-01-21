export const Types = {
  GET_USER_REQUEST: 'userList/GET_USER_REQUEST',
  GET_USER_SUCCESS: 'userList/GET_USER_SUCCESS',
  GET_POST_REQUEST: 'postList/GET_POST_REQUEST',
  GET_POST_SUCCESS: 'postList/GET_POST_SUCCESS',
  REMOVE: 'userList/REMOVE',
  ADD_REQUEST: 'newUser/ADD_REQUEST',
};

const INITIAL_STATE = {
  data: [],
  newUsers: [],
  posts: [],
  numberOfUsers: 0,
};
export default function userList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USER_REQUEST: {
      return {
        ...state,
      };
    }
    case Types.GET_USER_SUCCESS: {
      const numberOfUsers = action.payload.data.length;
      return {
        ...state,
        data: action.payload.data.concat(state.newUsers),
        numberOfUsers,
      };
    }
    case Types.GET_POST_REQUEST: {
      return {
        ...state,
      };
    }
    case Types.GET_POST_SUCCESS: {
      const numberOfUsers = state.numberOfUsers;
      const posts = [];
      for (let i = 1; i <= numberOfUsers; i++) {
        posts.push(action.payload.data.filter(user => user.userId === i));
        posts[posts.length - 1] = posts[posts.length - 1].length;
      }
      return {
        ...state,
        data: [...state.data, posts],
      };
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
      return { ...state, data: state.data.filter(user => user.id !== action.payload.user.id) };
    }
    default: {
      return state;
    }
  }
}

export const Creators = {
  getUserListRequest: () => ({ type: Types.GET_USER_REQUEST }),

  getUserListSuccess: data => ({
    type: Types.GET_USER_SUCCESS,
    payload: { data },
  }),

  getPostListRequest: () => ({ type: Types.GET_POST_REQUEST }),

  getPostListSuccess: data => ({
    type: Types.GET_POST_SUCCESS,
    payload: { data },
  }),

  removeUser: user => ({
    type: Types.REMOVE,
    payload: { user },
  }),

  addUserRequest: data => ({
    type: Types.ADD_REQUEST,
    payload: { data },
  }),
};
