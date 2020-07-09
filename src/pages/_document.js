import React from "react";
import NextDocument, {Head, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
      <Head/>
      <body>
        <Main/>
        <div id="modal"/>
        <NextScript/>
      </body>
      </html>
    );
  }
}
