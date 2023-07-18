import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ForumInput from "../components/ForumInput";
import ForumList from "../components/ForumList";
import NavigationBar from "../components/NavigationBar";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { asyncPreloadProcess } from "../states/preload/action";
import { asyncUnsetAuthUser } from "../states/auth/action";
import asyncPopulateThreads from "../states/shared/action";

export default function Home() {
  const {
    auth = null,
    preload = false,
    threads = [],
    users = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    dispatch(asyncPopulateThreads());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const onLike = ({ threadId, isLiked }) => {
    if (auth) {
      dispatch(asyncToggleLikeThread({ threadId, isLiked }));
    } else {
      router.push("/auth/login");
    }
  };

  const onCreatePost = ({ title, content }) => {
    if (auth) {
      dispatch(asyncAddThread({ title, body: content }));
    } else {
      router.push("/auth/login");
    }
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
    <>
      <div className="bg-slate-100 min-h-screen pt-16">
        <header>
          <NavigationBar
            logout={onSignOut}
            onBackHome={() => {
              router.push("/");
            }}
          />
          {/* <Loading /> */}
        </header>
        <main>
          <ForumInput post={onCreatePost} />
          <ForumList
            threads={threadList}
            like={onLike}
            userId={auth === null ? "" : auth.id}
          />
        </main>
      </div>

      <ToastContainer />
    </>
  );
}
