import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserListTypes } from '../ducks/userList';

import { getUserList, getPostList } from './userList';

export default function* rootSaga() {
  yield all([
    takeLatest(UserListTypes.GET_USER_REQUEST, getUserList),
    takeLatest(UserListTypes.GET_POST_REQUEST, getPostList),
  ]);
}
