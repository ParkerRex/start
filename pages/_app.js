import Head from "next/head";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/*add the favicon*/}
      <Head>
        <link rel="shortcut icon" href="/favicon.co" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};
export default MyApp;
