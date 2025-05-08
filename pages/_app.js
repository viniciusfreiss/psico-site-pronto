import '../styles/globals.css'
import WhatsAppWidget from '../components/WhatsAppWidget'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppWidget />
    </>
  )

}










