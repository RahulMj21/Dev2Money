import Footer from "../components/Footer";
import Header from "../components/Header";
import "../scss/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
