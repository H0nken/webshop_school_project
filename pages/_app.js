import '../styles/globals.css'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
