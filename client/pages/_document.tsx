import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Personal portfolio/blog of Bodhi Vandael"
          />
          <meta
            name="keywords"
            content="freelancer, webdeveloper, developer, software, engineer, software engineer, bodhi, vandael, Bodhi Vandael,"
          />
          <meta name="author" content="Bodhi Vandael" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
