import '../styles/globals.css';
import Link from 'next/link';
// import { BsArrowLeftShort } from "react-icons/bs"; 
import React, { useState, useEffect } from 'react';

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
  const [Open, setOpen] = useState(true);

  return (
    <div className={roboto.className}>
      {/* <div className='flex'>
        <div className='bg-dark-purple h-screen p-5 pt-8 w-72 relative'>
          <BsArrowLeftShort className="bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer" />
        </div>
        <div className='p-7'>
          <h1 className='text-2xl font-semibold'>Home Page</h1>
        </div>
      </div> */}
      <DarkModeProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </DarkModeProvider>
    </div>
  )

}
