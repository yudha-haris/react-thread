/**
 * test scenario for usersReducer
 *
 * - userReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USERS action
 *
 */

import { describe, expect, it } from 'vitest';
import usersReducer from '../../../states/users/reducer';
import { ActionType } from '../../../states/users/action';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users: [
          {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual([
      {
        id: 'users-1',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
    ]);
  });
});
