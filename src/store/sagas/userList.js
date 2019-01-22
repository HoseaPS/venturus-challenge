import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserListActions } from '../ducks/userList';

export function* getUserList() {
  try {
    const users = yield call(api.get, '/users');
    let posts;
    let albums;
    let photos;
    const usersAndPosts = [];
    for (let i = 1; i <= users.data.length; i++) {
      posts = yield call(api.get, `/posts?userId=${i}`);
      albums = yield call(api.get, `/albums?userId=${i}`);
      photos = yield call(api.get, `/photos?albumId=${i}`);

      usersAndPosts.push({
        user: users.data[i - 1],
        posts: posts.data.length,
        albums: albums.data.length,
        photos: photos.data.length,
      });
    }

    yield put(UserListActions.getUserListSuccess(usersAndPosts));
  } catch (err) {
    yield put(UserListActions.getUserInfoFailure('Erro ao adicionar repositório'));
  }
}
