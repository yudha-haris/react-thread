/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import React from 'react';
import NextProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from '../states';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <NextProgress />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
