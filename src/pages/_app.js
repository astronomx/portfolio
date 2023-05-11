import '@/styles/globals.css'

import { Anek_Latin } from "next/font/google"
const anek = Anek_Latin({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={anek.className}>
      <Component {...pageProps} />
    </div>
  )
}
