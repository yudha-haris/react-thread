import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth/reducer';
import preloadReducer from './preload/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import threadDetailReducer from './threadDetail/reducer';

const store = configureStore({
  reducer: {
    auth: authUserReducer,
    preload: preloadReducer,
    threads: threadsReducer,
    users: usersReducer,
    thread: threadDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
