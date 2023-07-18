import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD: 'RECEIVE_THREAD',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREAD,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncToggleLikeThread({ threadId, isLiked }) {
  return async (dispatch, getState) => {
    const { auth } = getState();
    dispatch(toggleLikeThreadActionCreator({ threadId, userId: auth.id }));

    try {
      await api.toggleLikeThread({ id: threadId, isLiked });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(toggleLikeThreadActionCreator({ threadId, userId: auth.id }));
    }
  };
}

function asyncAddThread({ title, body }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await api.addThread({ title, body });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  toggleLikeThreadActionCreator,
  addThreadActionCreator,
  asyncToggleLikeThread,
  asyncAddThread,
};
