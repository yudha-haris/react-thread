import React from 'react';
import {
  HandThumbUpIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import IconButton from './IconButton';
import { postedAt } from '../utils';
import { threadPropTypes } from '../utils/propTypes';

function ForumItem({ thread, like, userId }) {
  const navigate = useRouter();

  const onDetailNavigate = (event) => {
    event.stopPropagation();
    navigate.push(`/threads/${thread.id}`);
  };

  const sanitizedBody = thread.body.replace(/<\/?div>|<br>|&nbsp;/g, ' ');
  const truncatedBody = sanitizedBody.length > 200
    ? `${sanitizedBody.slice(0, 200)}...`
    : sanitizedBody;
  const isLiked = thread.upVotesBy.includes(userId);

  const onLikeClick = (event) => {
    event.stopPropagation();
    like({ threadId: thread.id, isLiked });
  };

  return (
    <div className="p-6 bg-white max-w-2xl mx-auto mb-4 rounded-2xl">
      <div className="flex items-center">
        <button
          type="button"
          onClick={onDetailNavigate}
          className="text-xl font-bold mb-1"
        >
          {thread.title}
        </button>
        <p className="ml-auto">{postedAt(thread.createdAt)}</p>
      </div>

      <p className="font-bold text-sm mb-2">{thread.user.name}</p>
      <p className="text-base">{truncatedBody}</p>
      <div className="flex items-center mt-4 mb-3">
        <ChatBubbleBottomCenterIcon className="w-4 h-4 text-slate-400" />
        <p className="mx-1 text-slate-500 text-sm">
          {thread.totalComments}
          {' '}
          balasan
        </p>
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
          text={
            thread.upVotesBy.length === 0
              ? 'Suka'
              : `${thread.upVotesBy.length}`
          }
        />
        <div className="w-2" />
        <IconButton
          onClick={onDetailNavigate}
          icon={<ChatBubbleBottomCenterIcon className="w-5 h-5 text-inherit" />}
          text="Komentar"
        />
      </div>
    </div>
  );
}

ForumItem.propTypes = {
  thread: threadPropTypes.isRequired,
  like: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ForumItem;
