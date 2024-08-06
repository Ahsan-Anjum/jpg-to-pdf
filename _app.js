import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css"; // Import your global styles if you have any

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
