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
