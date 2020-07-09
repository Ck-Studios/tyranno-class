import Head from "next/head";
import "swiper/css/swiper.css";
import "react-responsive-modal/styles.css";
import {AnimatePresence} from "framer-motion";
import {ApolloProvider} from "@apollo/react-hooks";
import {useApolloClient} from "@apollo/react-hooks";
// import {useApollo} from "client/apollo/client";
import "styles/index.css";

const isProduction = process.env.NODE_ENV === "production";

export default function App({Component, pageProps, store, router, status}) {


  return (
    <>
      <Head>
      </Head>
      {/*<ApolloProvider client={apolloClient}>*/}
        <>
          <AnimatePresence exitBeforeEnter>
            <Component
              {...pageProps}
              key={router.route}
            />
          </AnimatePresence>
        </>
      {/*</ApolloProvider>*/}
      <style global jsx>
        {`  
            html {
                box-sizing: border-box;
                font-size: 16px;
            }
            
            body {
                width: 100%;
                height: 100%;
            }
            
            .structure-container {
              margin: 0 auto;
            }
            
            * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans KR', 'Sans-serif'; }

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
