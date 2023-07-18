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

export default function Home() {
  const { auth = null, preload = false } = useSelector((states) => states);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (preload) {
    return null;
  }

  if (!auth) {
    router.push("/auth/login");
  }

  return (
    <>
      <div className="bg-slate-100 min-h-screen pt-16">
        <header>
          <NavigationBar logout={onSignOut} onBackHome={() => {}} />
          {/* <Loading /> */}
        </header>
        <main>
          <ForumInput post={() => {}} />
          <ForumList threads={[]} like={() => {}} userId={""} />
        </main>
      </div>

      <ToastContainer />
    </>
  );
}