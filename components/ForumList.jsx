import React from 'react';
import PropTypes from 'prop-types';
import ForumItem from './ForumItem';
import { threadPropTypes } from '../utils/propTypes';

function ForumList({ threads = [], like, userId }) {
  return (
    <div>
      {threads.map((thread) => (
        <ForumItem thread={thread} key={thread.id} like={like} userId={userId} />
      ))}
    </div>
  );
}

ForumList.propTypes = {
  threads: PropTypes.arrayOf(threadPropTypes).isRequired,
  like: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ForumList;
