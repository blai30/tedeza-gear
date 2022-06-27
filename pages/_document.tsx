import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="en" className="">
        <Head>
          {/* Standard meta. */}
          <meta key="author" name="author" content="Pulse" />
          <meta
            key="description"
            name="description"
            content="Maplestory Reboot gear for Tedeza."
          />

          {/* Open Graph. */}
          <meta
            key="og:description"
            property="og:description"
            content="Maplestory Reboot gear for Tedeza."
          />
          <meta
            key="og:site_name"
            property="og:site_name"
            content="Tedeza gear"
          />
          <meta
            key="og:url"
            property="og:url"
            content="https://tedeza-gear.vercel.app/"
          />
          <meta key="og:type" property="og:type" content="website" />
          <meta key="og:locale" property="og:locale" content="en_US" />

          {/* Twitter meta. */}
          <meta
            key="twitter:description"
            property="twitter:description"
            content="Maplestory Reboot gear for Tedeza."
          />
          <meta key="twitter:card" name="twitter:card" content="summary" />

          <link rel="canonical" href="https://tedeza-gear.vercel.app/" />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://rsms.me/inter/inter.css"
          />
        </Head>
        <body className="bg-neutral-100 subpixel-antialiased transition-colors dark:bg-neutral-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
