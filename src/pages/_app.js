import {useEffect} from "react";
import Head from "next/head";
import "swiper/css/swiper.css";
import "react-responsive-modal/styles.css";
import {AnimatePresence} from "framer-motion";
import {ApolloProvider} from "@apollo/react-hooks";
import {useApolloClient} from "@apollo/react-hooks";
import {Provider} from "react-redux";
import {useStore} from "client/redux/redux";
import {initializeApollo, useApollo} from "client/apollo/client";
import "styles/index.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const isProduction = process.env.NODE_ENV === "production";

export default function App({Component, pageProps, router, status}) {
  const apolloClient = useApollo(pageProps?.initialApolloState);
  const store = useStore(pageProps?.initialReduxState);

  useEffect(() => {
      if(window) {
        window.scrollTo(0, 1);
      }
    },
    [router?.route]);
  return (
    <>
      <Head>

      </Head>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <>
            <AnimatePresence exitBeforeEnter>
              <Component
                {...pageProps}
                key={router.route}
              />
            </AnimatePresence>
          </>
        </ApolloProvider>
      </Provider>
      <style global jsx>
        {`  
            @font-face { font-family: 'NanumSquareRound'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff'); font-weight: normal; font-style: normal; }
            html {
                box-sizing: border-box;
                font-size: 16px;
            }
            
            body {
                width: 100%;
                height: 100%;
            }
            
            button:focus, input:focus {
               outline: 0;
            }
            
            .structure-container {
              margin: 0 auto;
            }
            
            * { font-family: 'NanumSquareRound', 'Sans-serif'; }

            *,
            *:before,
            *:after {
                box-sizing: inherit;
            }

            #__next-build-watcher,
            #__next-prerender-indicator {
                display: none !important;
            }
            
            p, h1, h2, h3, h4, h5, h6, span, button {
                margin: 0;
                padding: 0;
            }
                    `}
      </style>
    </>
  );
}

App.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {};
  const {store, req, isServer, res} = ctx;
  const cookie = isServer ? req.headers.cookie : "";

  if (res && res.statusCode === 404) {
    const status = 404;
    return {status};
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ctx});
  }

  return {pageProps};
};
