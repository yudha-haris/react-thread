import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { asyncUnsetAuthUser } from '../states/auth/action';
import NavigationBar from './NavigationBar';
import Loading from './Loading';

function MainLayout({ children, auth }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <div className="bg-slate-100 min-h-screen pt-16">
      <NavigationBar
        authAction={
          auth
            ? onSignOut
            : () => {
              router.push('/auth/login');
            }
        }
        onBackHome={() => {
          router.push('/');
        }}
        authType={auth ? 'Logout' : 'Login'}
      />
      <Loading />
      {children}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  auth: PropTypes.bool.isRequired,
};

export default MainLayout;
