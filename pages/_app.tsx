import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Script
        strategy={"beforeInteractive"}
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_KEY}`}
      ></Script>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
