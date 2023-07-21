import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import LoginInput from '../../components/LoginInput';
import { asyncSetAuthUser } from '../../states/auth/action';

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onLogin = ({ email, password }) => {
    dispatch(
      asyncSetAuthUser({
        email,
        password,
        onSuccess: () => {
          router.push('/');
        },
      }),
    );
  };
  return (
    <div className="bg-slate-100 min-h-screen">
      <main>
        <LoginInput login={onLogin} />
      </main>
    </div>
  );
}
