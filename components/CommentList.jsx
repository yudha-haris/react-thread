import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { commentPropTypes } from '../utils/propTypes';

function CommentList({ comments = [] }) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentPropTypes),
};

CommentList.defaultProps = {
  comments: [],
};

export default CommentList;
