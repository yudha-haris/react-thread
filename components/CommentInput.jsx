import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import TextAreaField from './TextAreaField';

function CommentInput({ comment }) {
  const [content, onCommentChange, setComment] = useInput('');

  function addComment() {
    if (content.trim()) {
      comment(content);
      setComment('');
    }
  }

  return (
    <form>
      <div className="flex">
        <TextAreaField
          value={content}
          onChange={onCommentChange}
          placeholder="Berikan komentar..."
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={addComment}
          type="button"
          className="px-6 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-500"
        >
          Add Comment
        </button>
      </div>
    </form>
  );
}

CommentInput.propTypes = {
  comment: PropTypes.func.isRequired,
};

export default CommentInput;
