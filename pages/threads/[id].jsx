import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
  asyncToggleDislikeThreadDetail,
  asyncToggleLikeThreadDetail,
} from '../../states/threadDetail/action';
import CommentInput from '../../components/CommentInput';
import CommentList from '../../components/CommentList';
import ForumDetail from '../../components/ForumDetail';
import MainLayout from '../../components/MainLayout';

export default function Thread() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const { auth = null, thread } = useSelector((states) => states);

  useEffect(() => {
    if (id) {
      dispatch(asyncReceiveThreadDetail(id));
    }
  }, [id]);

  const onLikeThread = (isLiked) => {
    dispatch(asyncToggleLikeThreadDetail(isLiked));
  };

  const onDislikeThread = (isLiked) => {
    dispatch(asyncToggleDislikeThreadDetail(isLiked));
  };

  const onAddComment = (content) => {
    dispatch(asyncAddComment(content));
  };

  if (!thread) {
    return (
      <MainLayout auth={auth !== null}>
        <div />
      </MainLayout>
    );
  }

  return (
    <MainLayout auth={auth !== null}>
      <div className="max-w-2xl mx-auto pb-6">
        <div className="p-6 bg-white mb-4 rounded-2xl mt-4">
          <ForumDetail
            like={onLikeThread}
            dislike={onDislikeThread}
            thread={thread}
            userId={auth ? auth.id : ''}
          />
          <div className="mt-6">
            <CommentInput comment={onAddComment} />
          </div>
        </div>
        <CommentList comments={thread.comments} />
      </div>
    </MainLayout>
  );
}
