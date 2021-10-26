import Head from "next/head"
//import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css"
import CartProvider from '../components/context/CartProvider'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
