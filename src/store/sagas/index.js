import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserListTypes } from '../ducks/userList';

import { getUserList } from './userList';

export default function* rootSaga() {
  yield all([takeLatest(UserListTypes.GET_USER_INFO_REQUEST, getUserList)]);
}
