/**
 * test scenario
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
  afterEach, beforeEach, describe, expect, it, vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';
import {
  setPreloadActionCreator,
  asyncPreloadProcess,
} from '../../../states/preload/action';
import { setAuthUserActionCreator } from '../../../states/auth/action';

const fakeUserResponse = {
  id: 'users-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api.getOwnProfileBackup = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api.getOwnProfileBackup;

    delete api.getOwnProfileBackup;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub
    api.getOwnProfile = () => Promise.resolve(fakeUserResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // expect
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakeUserResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(setPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // expect
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
