import AppProvider from "@/hooks"
import GlobalStyle from "@/styles/GlobalStyle"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Sweeten</title>
      </Head>
      <GlobalStyle />
        <Component {...pageProps} />
    </AppProvider>
    )
}

export default MyApp
