/**
 * test scenario for authUserReducer
 *
 * - authUserReducer function
 *  - should return the initial state when given by unknown action
 *  - should return USER when given by SET_AUTH_USER action
 *  - should return null when given by UNSET_AUTH_USER action
 *
 */

import { describe, expect, it } from 'vitest';
import authUserReducer from '../../../states/auth/reducer';
import { ActionType } from '../../../states/auth/action';

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return USER when given by SET_AUTH_USER action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    });
  });

  it('should return null when given by UNSET_AUTH_USER action', () => {
    // arrange
    const initialState = {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };
    const action = { type: ActionType.UNSET_AUTH_USER };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });
});
