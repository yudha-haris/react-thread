import React from 'react';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/20/solid';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { postedAt } from '../utils';
import { threadPropTypes } from '../utils/propTypes';

function ForumDetail({
  thread, like, dislike, userId,
}) {
  const isLiked = thread.upVotesBy.includes(userId);
  const isDisliked = thread.downVotesBy.includes(userId);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (isDisliked) {
      dislike(isDisliked);
    }
    like(isLiked);
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (isLiked) {
      like(isLiked);
    }
    dislike(isDisliked);
  };

  return (
    <section>
      <div className="flex items-center">
        <button type="button" className="text-xl font-bold mb-1">
          {thread.title}
        </button>
        <p className="ml-auto">{postedAt(thread.createdAt)}</p>
      </div>
      <div className="flex items-center mb-4 mt-1">
        <img
          alt={thread.owner.name}
          className="h-6 w-6 rounded-full mr-2"
          src={thread.owner.avatar}
        />
        <p className="font-bold text-sm">{thread.owner.name}</p>
      </div>
      <div>{parse(thread.body)}</div>
      <div className="flex items-center mt-4 mb-3">
        <div className="flex items-center">
          <HandThumbUpIcon className="w-4 h-4 text-slate-400" />
          <p className="mx-1 text-slate-500 text-sm">{thread.upVotesBy.length}</p>
        </div>
        <div className="flex items-center">
          <HandThumbDownIcon className="w-4 h-4 text-slate-400" />
          <p className="mx-1 text-slate-500 text-sm">{thread.downVotesBy.length}</p>
        </div>
        <div className="flex items-center ml-auto">
          <ChatBubbleBottomCenterIcon className="w-4 h-4 text-slate-400" />
          <p className="mx-1 text-slate-500 text-sm">
            {thread.comments.length}
            {' '}
            balasan
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <IconButton
          onClick={onLikeClick}
          icon={
            isLiked ? (
              <HandThumbUpIcon className="w-5 h-5 text-purple-600" />
            ) : (
              <HandThumbUpIcon className="w-5 h-5 text-inherit" />
            )
          }
          text="Suka"
        />
        <div className="w-2" />
        <IconButton
          onClick={onDislikeClick}
          icon={
            isDisliked ? (
              <HandThumbDownIcon className="w-5 h-5 text-purple-600" />
            ) : (
              <HandThumbDownIcon className="w-5 h-5 text-inherit" />
            )
          }
          text="Tidak suka"
        />
      </div>
    </section>
  );
}

ForumDetail.propTypes = {
  thread: threadPropTypes.isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ForumDetail;
