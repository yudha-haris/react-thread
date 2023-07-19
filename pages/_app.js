import "../styles/globals.css";
import store from "../states";
import NextProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
