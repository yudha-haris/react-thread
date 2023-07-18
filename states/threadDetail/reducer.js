import { ActionType } from './action';

function threadDetailReducer(thread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.thread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      return {
        ...thread,
        upVotesBy: thread.upVotesBy.includes(action.payload.userId)
          ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
          : thread.upVotesBy.concat([action.payload.userId]),
      };
    case ActionType.TOGGLE_DISLIKE_THREAD_DETAIL:
      return {
        ...thread,
        downVotesBy: thread.downVotesBy.includes(action.payload.userId)
          ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
          : thread.downVotesBy.concat([action.payload.userId]),
      };
    case ActionType.ADD_COMMENT:
      return {
        ...thread,
        comments: [action.payload.comment, ...thread.comments],
      };
    default:
      return thread;
  }
}

export default threadDetailReducer;
