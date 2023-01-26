import '../styles/globals.css';
import Link from 'next/link';
import { DarkModeProvider } from '../context/DarkMode';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </div>
  )

}
