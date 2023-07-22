/**
 * test scenario for preloadsReducer
 *
 * - preloadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the boolean when given by SET_IS_PRELOAD action
 *
 */

import { describe, expect, it } from 'vitest';
import preloadReducer from '../../../states/preload/reducer';
import { ActionType } from '../../../states/preload/action';

describe('preloadReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = true;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = preloadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the boolean when given by SET_IS_PRELOAD action', () => {
    // arrange
    const initialState = true;
    const action = {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload: false,
      },
    };

    // action
    const nextState = preloadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(false);
  });
});
