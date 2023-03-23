import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/examsList.css";

import Navbar from "../components/Navbar";
import { wrapper } from "../redux/store";
import { useSelector } from "react-redux";

function App({ Component, pageProps }) {
  const user = useSelector((state) => state.AuthReducer.user);
  console.log("user = ", user);
  return (
    <>
      <Navbar user={user} />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
