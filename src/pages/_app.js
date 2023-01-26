import '../styles/globals.css';
import Link from 'next/link';
import { DarkModeProvider } from '../context/DarkMode';

import NavBar from 'components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <DarkModeProvider>
      <NavBar />
        <Component {...pageProps} />
      </DarkModeProvider>
    </div>
  )

}
