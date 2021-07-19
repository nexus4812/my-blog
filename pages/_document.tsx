import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { DocumentInitialProps } from 'next/dist/next-server/lib/utils'

const googleTagManagerScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TNGQJ6T');`

const googleTagManagerNoScript = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNGQJ6T"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx)
  }

  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          {/* Google Tag Manager  */}
          <script dangerouslySetInnerHTML={{ __html: googleTagManagerScript }} />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript)  */}
          <noscript dangerouslySetInnerHTML={{ __html: googleTagManagerNoScript }} />
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
