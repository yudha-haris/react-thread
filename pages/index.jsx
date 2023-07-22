import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForumInput from '../components/ForumInput';
import ForumList from '../components/ForumList';
import { asyncPreloadProcess } from '../states/preload/action';
import asyncPopulateThreads from '../states/shared/action';
import {
  asyncToggleLikeThread,
  asyncAddThread,
} from '../states/threads/action';
import MainLayout from '../components/MainLayout';

export default function Home() {
  const {
    auth = null,
    preload = false,
    threads = [],
    users = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    dispatch(asyncPopulateThreads());
  }, [dispatch]);

  const onLike = ({ threadId, isLiked }) => {
    dispatch(asyncToggleLikeThread({ threadId, isLiked }));
  };

  const onCreatePost = ({ title, content }) => {
    dispatch(asyncAddThread({ title, body: content }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    auth: auth === null ? null : auth.id,
  }));

  if (preload) {
    return null;
  }

  return (
    <MainLayout auth={auth !== null}>
      <main>
        <ForumInput post={onCreatePost} />
        <ForumList
          threads={threadList}
          like={onLike}
          userId={auth === null ? '' : auth.id}
        />
      </main>
    </MainLayout>
  );
}
