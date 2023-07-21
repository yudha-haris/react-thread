/**
 * test scenario for threadsReducer
 *
 * - threadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new talk when given by ADD_THREADS action
 *  - should return the threads with the toggled like talk when given by TOGGLE_LIKE_THREADS action
 *
 */

import { describe, expect, it } from "vitest";
import threadsReducer from "../../../states/threads/reducer";
import { ActionType } from "../../../states/threads/action";

describe("threadsReducer function", () => {
  it("should return initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the threads when given by RECEIVE_THREADS action", () => {
    // dummyData
    const threadOne = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      ownerId: "users-1",
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    };
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREAD,
      payload: {
        threads: [threadOne],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it("should return the threads with the toggled like thread when given by TOGGLE_LIKE_THREAD action", () => {
    // dummyData
    const threadOne = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      ownerId: "users-1",
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    };

    // arrange
    const initialState = [threadOne];
    const action = {
      type: ActionType.TOGGLE_LIKE_THREAD,
      payload: {
        threadId: "thread-1",
        userId: "user-1",
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...threadOne,
        upVotesBy: [action.payload.userId],
      },
    ]);
  });
});
