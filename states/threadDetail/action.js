import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
  TOGGLE_DISLIKE_THREAD_DETAIL: 'TOGGLE_DISLIKE_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveThreadDetailActionCreator(thread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      thread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleLikeThreadDetail(userId) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDislikeThreadDetail(userId) {
  return {
    type: ActionType.TOGGLE_DISLIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncAddComment(content) {
  return async (dispatch, getState) => {
    const { thread } = getState();
    dispatch(showLoading());

    try {
      const comment = await api.createComment({ threadId: thread.id, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    dispatch(hideLoading());
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());
    dispatch(showLoading());

    try {
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(hideLoading());
  };
}

function asyncToggleLikeThreadDetail(isLiked) {
  return async (dispatch, getState) => {
    const { auth, thread } = getState();
    dispatch(toggleLikeThreadDetail(auth.id));

    try {
      await api.toggleLikeThread({ id: thread.id, isLiked });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(toggleLikeThreadDetail(auth.id));
    }
  };
}

function asyncToggleDislikeThreadDetail(isDisliked) {
  return async (dispatch, getState) => {
    const { auth, thread } = getState();
    dispatch(toggleDislikeThreadDetail(auth.id));

    try {
      await api.toggleDislikeThread({ id: thread.id, isDisliked });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(toggleDislikeThreadDetail(auth.id));
    }
  };
}

export {
  ActionType,
  clearThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
  toggleLikeThreadDetail,
  toggleDislikeThreadDetail,
  asyncReceiveThreadDetail,
  asyncToggleLikeThreadDetail,
  asyncToggleDislikeThreadDetail,
  asyncAddComment,
};
