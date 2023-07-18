import React from 'react';
import parse from 'html-react-parser';
import { postedAt } from '../utils';
import { commentPropTypes } from '../utils/propTypes';

function CommentItem({ comment }) {
  return (
    <div className="p-6 bg-white rounded-2xl mt-2">
      <div className="flex items-center mb-2">
        <img
          alt={comment.owner.name}
          className="h-6 w-6 rounded-full mr-2"
          src={comment.owner.avatar}
        />
        <p className="font-semibold">{comment.owner.name}</p>
        <p className="ml-auto">{postedAt(comment.createdAt)}</p>
      </div>
      <div>{parse(comment.content)}</div>
    </div>
  );
}

CommentItem.propTypes = {
  comment: commentPropTypes.isRequired,
};

export default CommentItem;
