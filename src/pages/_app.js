import '../styles/globals.css';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import { Roboto_Condensed } from '@next/font/google';


import { DarkModeProvider } from '../context/DarkMode';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

const roboto = Roboto_Condensed({
  weight: '400',
  size: '14px',
  subsets: ['latin'],
})
const inter = Inter({subsets : ['latin']})
export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <DarkModeProvider>
      <NavBar />
        <Component {...pageProps} />
        <Footer />
      </DarkModeProvider>
    </div>
  )

}
