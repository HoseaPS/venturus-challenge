import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserListActions } from '../ducks/userList';

export function* getUserList() {
  try {
    const response = yield call(api.get, '/users');
    yield put(UserListActions.getUserListSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* getPostList() {
  try {
    const response = yield call(api.get, '/posts');
    yield put(UserListActions.getPostListSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
